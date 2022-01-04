FROM ubuntu:latest

RUN apt-get -y update
RUN apt-get -y install vim
RUN apt-get install git -y
RUN apt update && apt-get install python3.6 python3-pip -y
RUN mkdir /opt/app
COPY BackEnd /opt/app

WORKDIR /opt/app
RUN pip install -r requirements.txt
WORKDIR /opt/app/BackEnd
RUN pip install dataclasses
RUN export FLASK_APP=flask_upload
RUN flask run

