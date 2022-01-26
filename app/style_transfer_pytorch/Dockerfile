FROM nvidia/cuda:11.2.0-cudnn8-devel-ubuntu20.04



COPY . /app
WORKDIR /app/style_transfer_pytorch
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y python3-pip
RUN ln -snf /usr/share/zoneinfo/$CONTAINER_TIMEZONE /etc/localtime && echo $CONTAINER_TIMEZONE > /etc/timezone
RUN apt-get install -y libglib2.0-0
RUN pip3 install -r requirements.txt
RUN apt-get update && apt-get install -y sudo
RUN apt-get -y install libgl1-mesa-glx

EXPOSE 5005
