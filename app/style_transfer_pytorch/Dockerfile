FROM python:3.6


COPY .. /app
WORKDIR /app/style_transfer_pytorch
RUN pip3 install -r requirements.txt
RUN apt-get update && apt-get install -y sudo
RUN apt-get -y install libgl1-mesa-glx

EXPOSE 5005
