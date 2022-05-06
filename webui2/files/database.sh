!#/bin/sh

apt-get update
apt-get install sudo
apt install postgresql -y
sudo service postgresql restart
