#!/bin/sh

apt-get update;

echo "Setup files";

mkdir -p /etc/faceapp-client;

cp -r dist/angular-facial-recog/* /etc/faceapp-client/;

echo "Installing python packages";

python -m pip install -r ./server/requirements.txt;

echo "Installing nginx";

cp -r scripts/nginx/default /etc/nginx/sites-available/;

apt-get install --yes nginx;

service nginx restart;

exit 0;
