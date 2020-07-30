from flask import Flask, render_template, request
import pandas as pd
import cv2
import numpy as np
import base64
import requests
import json
#from flask.ext.cors import cross_origin
from flask_cors import CORS, cross_origin
from flask import jsonify
import time
from flask_socketio import SocketIO, emit, send
from engineio.payload import Payload
from circular_buf import RingBuffer
import threading
import datetime as dt
import os.path

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
cors = CORS(app, resources={r"/": {"origins": "*"}})
#cors = CORS(app, resources={r"/add_face": {"origins": "http://localhost:3000"}})

Payload.max_decode_packets = 500
socketio = SocketIO(app, cors_allowed_origins="*")
fourcc = cv2.VideoWriter_fourcc(*'X264')
clientToServerSharedBufsize = 500
out = cv2.VideoWriter('finaloutput.mp4',fourcc, 8.0, (160,120))

#template = cv2.imread("tej_web2.jpg", cv2.IMREAD_GRAYSCALE)
#w, h = template.shape[::-1]

cascPath = "haarcascade_frontalface_default.xml"
faceCascade = cv2.CascadeClassifier(cascPath)
first = True
clip_face = []
size = 100
counter = 0
counter_front = 0
buffer = RingBuffer(shape=(size, 120,160,3))
size_back = size/2
size_front = size/2
record_clip = False
detect_face = False
errormsg = ''

@app.route('/videoRecording', methods=['GET', 'POST'])
#@cross_origin(origin='*',headers=['access-control-allow-origin','Content-Type'])
@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#@cross_origin()
def videoRecording():
    global first
    global clip_face
    global counter,counter_front, buffer, size_back,size_front, record_clip,flag
    if request.method == 'POST':
        #  read encoded image
        #print(request.json) 
        lock = threading.Lock()
        lock.acquire()
        imageString = base64.b64decode(request.json['img'])
        #print(imageString)

        #  convert binary data to numpy array
        nparr = np.fromstring(imageString, np.uint8)
        #print(nparr)

        #  let opencv decode image to correct format
        img = cv2.imdecode(nparr, cv2.IMREAD_ANYCOLOR)
        out.write(img) 
        buffer.append(img)
        print(counter)
        counter = counter + 1
        URL = "http://localhost:8080/ca/storeFlags"
        name = "Harry Potter"
        #img = cv2.imdecode(nparr, 1);
#        cv2.imshow("frame", img)
#        cv2.waitKey(0)
#        cv2.destroyAllWindows()
        detect_face = False
        if(counter % 40 == 0):
            detect_face = True
            gray_frame = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            faces = faceCascade.detectMultiScale(
                gray_frame,
                scaleFactor=1.1,
                minNeighbors=5,
                minSize=(30, 30),
            )
        
            
            if(np.size(faces) > 0):
                if(first == True):
                    x,y,h,w = faces[0]
                    clip_face = gray_frame[y:y+h, x:x+w]
                    cv2.imwrite("detected-boxes.jpg", clip_face)
                    first = False
            
            res = cv2.matchTemplate(gray_frame, clip_face, cv2.TM_CCOEFF_NORMED)
            loc = np.where(res >= 0.7)
        
        if(detect_face == False):
            retval = True
            errormsg = 'Success'
        else:
            if(np.size(faces) == 0):
                print('Fail')
                retval =False
                record_clip = True
                errormsg = 'No Face Detected'
                flag = 'No Face Detected'
                data = {'name':'Harry Potter','flag':'No Face Detected', 'timeStamp':'cool','url':'assets/no_face_clip.mp4'}
                headers = {'content-type': 'application/json'}
                r = requests.post(url = URL, data = json.dumps(data),headers=headers)
                print(r.json)

            elif(faces.shape[0] == 1):
                if(np.size(loc) > 0):
                    print('Success')
                    retval = True
                    errormsg = 'Success'
                else:
                    print('Fail')
                    retval =False
                    record_clip = True
                    errormsg = 'Incorrect Face Detected'
                    flag = 'Incorrect Face Detected'
                    data = {'name':'Harry Potter','flag':'Incorrect Face Detected', 'timeStamp':'cool','url':'assets/incorrect_face_clip.mp4'}
                    headers = {'content-type': 'application/json'}
                    r = requests.post(url = URL, data = json.dumps(data),headers=headers)
                    print(r.json)
            else:
                print('Fail')
                retval =False
                record_clip = True
                errormsg = 'Second Face Detected'
                flag = 'Second Face Detected'
                data = {'name':'Harry Potter','flag':'Second Face Detected', 'timeStamp':'cool','url':'assets/second_face_clip.mp4'}
                headers = {'content-type': 'application/json'}
                r = requests.post(url = URL, data = json.dumps(data),headers=headers)
                print(r.json)
                
            
        #cv2.imwrite('tej_web.jpg', img)
        if(record_clip == True):
            
            print(counter_front)
            counter_front = counter_front + 1
            if(counter_front == size_front):
                if(flag == "Second Face Detected"):
                    out_clip = cv2.VideoWriter('second_face_clip.mp4',fourcc, 8.0, (160,120))
                elif(flag == "Incorrect Face Detected"):
                    out_clip = cv2.VideoWriter('incorrect_face_clip.mp4',fourcc, 8.0, (160,120))
                elif(flag == "No Face Detected"):
                    out_clip = cv2.VideoWriter('no_face_clip.mp4',fourcc, 8.0, (160,120))
                for i in range(1,size):
                    img = buffer.read_bottom(i+ buffer.bottom)
                    #img = buffer.pop()
                    out_clip.write(img)
                print('Done with Recording')
                print('Enjoy')
                out_clip.release()
                counter_front = 0
                detect_face = False
                record_clip = False
        lock.release()
            
        
    return jsonify({"error": errormsg, "valid": retval})

@app.route('/videoRecordingClose', methods=['GET', 'POST'])
#@cross_origin(origin='*',headers=['access-control-allow-origin','Content-Type'])
@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
#@cross_origin()
def videoRecordingClose():
    global out
    if request.method == 'POST':
        #  read encoded image
        #print(request.json)
        imageString = base64.b64decode(request.json['img'])
        #print(imageString)

        #  convert binary data to numpy array
        nparr = np.fromstring(imageString, np.uint8)
        #print(nparr)

        #  let opencv decode image to correct format
        img = cv2.imdecode(nparr, cv2.IMREAD_ANYCOLOR)
        #img = cv2.imdecode(nparr, 1);
#        cv2.imshow("frame", img)
#        cv2.waitKey(0)
#        cv2.destroyAllWindows()
        out.write(img)      
        out.release()
        #cv2.imwrite('tej_web.jpg', img)
        finalURL = "http://localhost:8080/ca/storeFinalFlags"
        data = {'name':'Harry Potter','flag':'Incorrect Face Detected, Second Face Detected, No Face Detected', 'timeStamp':'cool','url':'assets/finaloutput.mp4'}
        headers = {'content-type': 'application/json'}
        r = requests.post(url = finalURL, data = json.dumps(data),headers=headers)
        print('Success')
        retval = True
        print('Success Exit')
    return ('', 204)

image = 0

@socketio.on('connect')
def connect_client():
   print('[INFO] Socket client connected: {}'.format(request.sid))
    
@socketio.on('disconnect')
def disconnect_web():
   print('[INFO] Web client disconnected: {}'.format(request.sid))

@cross_origin(origin='http://localhost:4200',headers=['Content-Type','Access-Control-Allow-Origin'])
def connect_web():
    print('[INFO] Web client connected: {}'.format(request.sid))
    retval = True
    errormsg = 'Success'
    return jsonify({"error": errormsg, "valid": retval})

@socketio.on('message', namespace='/')
def connect_message(message):
    global errormsg
    print('[INFO] CV client message: {} and {}'.format(request.sid,message))
    retval = True
    emit('AnomalyMsg', errormsg)
    return jsonify({"error": errormsg, "valid": retval})

@socketio.on('freeze', namespace='/')
def connect_message(message):
    print('[INFO] CV client message: {} and {}'.format(request.sid,message))
    retval = True
    errormsg = "freeze"
    emit('freezeMsg', errormsg, broadcast=True)
    return jsonify({"error": errormsg, "valid": retval})

@socketio.on('unfreeze', namespace='/')
def connect_message(message):
    print('[INFO] CV client message: {} and {}'.format(request.sid,message))
    retval = True
    errormsg = "unfreeze"
    emit('freezeMsg', "unfreeze", broadcast=True)
    return jsonify({"error": errormsg, "valid": retval})

servercountsharebuff = 0

@socketio.on('image')
def connect_image(img):
    global image, servercountsharebuff
    global errormsg
    servercountsharebuff = servercountsharebuff+1
    #   print(servercountsharebuff)
    imageString = base64.b64decode(img)
    nparr = np.fromstring(imageString, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_ANYCOLOR)
    retval = True
    emit('image_out', img, broadcast=True)
    #emit('AnomalyMsg', errormsg)
    errormsg = 'Success'
    return jsonify({"error": errormsg, "valid": retval})


if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, port=5000)
    socketio.run(app=app, host='0.0.0.0', port=5000)
    print('[INFO] Starting server at http://localhost:5000')
