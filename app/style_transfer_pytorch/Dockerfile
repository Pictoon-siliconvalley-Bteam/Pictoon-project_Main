FROM nvidia/cuda:11.2.0-cudnn8-devel-ubuntu20.04


COPY . /app
WORKDIR /app/style_transfer_pytorch
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y python3-pip
RUN pip3 install -r requirements.txt
RUN apt-get update && apt-get install -y sudo
RUN apt-get -y install libgl1-mesa-glx
#RUN sudo adduser --disabled-password --gecos "" app
#RUN sudo usermod -aG sudo app
#RUN cd .. && cd .. && sudo chmod 777 /root/.cache

#RUN chown app:admin /root/.cache
#RUN pip install gunicorn
EXPOSE 5005
#CMD [ "gunicorn","-b", "0.0.0.0:5005", "wsgi:application"]
#CMD ["python", "app.py"]
