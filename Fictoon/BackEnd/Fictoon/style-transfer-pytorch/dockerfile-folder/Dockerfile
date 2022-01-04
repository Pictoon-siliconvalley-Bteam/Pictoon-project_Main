FROM ubuntu:latest

RUN apt-get -y update
RUN apt-get -y install vim
RUN apt-get install git -y
RUN apt update && apt-get install python3 python3-pip -y
RUN mkdir /opt/app
COPY /Users/seonghanim/PycharmProjects/pythonProject6/style-transfer-pytorch /opt/app
WORKDIR /opt/app
RUN pip install -r requirements.txt


