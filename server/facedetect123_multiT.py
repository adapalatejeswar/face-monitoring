from flask import Flask, render_template, request, Response
import pandas as pd
import cv2
import numpy as np
import base64
#from flask.ext.cors import cross_origin
from flask_cors import CORS, cross_origin
from flask import jsonify
import time
from flask_socketio import SocketIO, emit, send
from engineio.payload import Payload
from circular_buf import RingBuffer

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
#app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/": {"origins": "*"}})

Payload.max_decode_packets = 500
socketio = SocketIO(app, cors_allowed_origins="*")
fourcc = cv2.VideoWriter_fourcc(*'X264')
out = cv2.VideoWriter('output.mp4',fourcc, 20.0, (640,480))
clientToServerSharedBufsize = 500
#clientToServerSharedBuf = RingBuffer(shape=(clientToServerSharedBufsize, 480,640,3))

image = 0
image_prev = 0
image_prev_prev = 0
countsharebuff = 0

#@socketio.on('connect', namespace='/invpage')
#@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#def connect_web():
#    print('[INFO] Web client connected: {}'.format(request.sid))
#    
#@socketio.on('disconnect',  namespace='/invpage')
#@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#def disconnect_web():
#    print('[INFO] Web client disconnected: {}'.format(request.sid))

#@socketio.on('connect', namespace='/exampage')
#@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#def connect_cv():
#    print('[INFO] CV client connected: {}'.format(request.sid))
#    
#@socketio.on('disconnect', namespace='/exampage')
#@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#def disconnect_cv():
#    print('[INFO] CV client disconnected: {}'.format(request.sid))
#    
#@socketio.on('cv2server')
#@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#def handle_cv_message(message):
#    socketio.emit('server2web', message, namespace='/web')

@socketio.on('connect', namespace='/')
@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
def connect_client():
    print('[INFO] CV client connected: {}'.format(request.sid))
    retval = True
    errormsg = 'Success'
    return jsonify({"error": errormsg, "valid": retval})

@socketio.on('message', namespace='/')
@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
def connect_message(message):
    print('[INFO] CV client message: {} and {}'.format(request.sid,message))
    retval = True
    errormsg = 'Success'
    emit('message_out', message)
    # with SocketIO('localhost', 5000, '/') as socketIO:
    #     socketIO.emit('message_out',"hello world", namespace='/')
    return jsonify({"error": errormsg, "valid": retval})

servercountsharebuff = 0

@socketio.on('image')
@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
def connect_image(img):
    global image, servercountsharebuff#, clientToServerSharedBuf
    # print('[INFO] CV client image: ')
    #image = np.array(Image.open(BytesIO(base64.b64decode(img))))
    servercountsharebuff = servercountsharebuff+1
    # print(servercountsharebuff)
    imageString = base64.b64decode(img)
    nparr = np.fromstring(imageString, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_ANYCOLOR);
    #clientToServerSharedBuf.append(image)
    #path = 'image\image'+str(servercountsharebuff) + '.jpg'
    #cv2.imwrite(path,image)
    #    cv2.imshow("frame", image)
#    cv2.waitKey(0)
    #cv2.destroyAllWindows()
    #print("Success  3")
    retval = True
    errormsg = 'Success'
    #emit('message_out', 'Hello')
    emit('image_out', img)
    return jsonify({"error": errormsg, "valid": retval})


counter_video_feed = 0
countsharebuff = 0
def gen_frames():  # generate frame by frame from camera
    global image, countsharebuff#   clientToServerSharedBuf
    while True:
        #image = clientToServerSharedBuf.pop()
        countsharebuff = countsharebuff+1
        print(countsharebuff)
        ret, buffer = cv2.imencode('.jpg', image)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
#        image = clientToServerSharedBuf.pop()
#        countsharebuff = countsharebuff+1
#        print(countsharebuff)
#        ret, buffer = cv2.imencode('.jpg', image)
#        frame = buffer.tobytes()
#        yield (b'--frame\r\n'
#               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
#        image = clientToServerSharedBuf.pop()
#        countsharebuff = countsharebuff+1
#        print(countsharebuff)
#        ret, buffer = cv2.imencode('.jpg', image)
#        frame = buffer.tobytes()
#        yield (b'--frame\r\n'
#               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed', methods=['GET', 'POST'])
#@socketio.on('/video_feed')
#@cross_origin(origin='*',headers=['access-control-allow-origin','Content-Type'])
#@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#@cross_origin()
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, port=5000)
    #app.run(debug=True, use_reloader=False, port=5000)
    print('[INFO] Starting server at http://localhost:5000')
    socketio.run(app=app, host='0.0.0.0', port=5000)
