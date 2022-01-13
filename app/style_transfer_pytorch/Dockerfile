FROM python:3.6


COPY .. /app
WORKDIR /app/style_transfer_pytorch
RUN pip3 install -r requirements.txt
RUN apt-get update && apt-get install -y sudo
#RUN sudo adduser --disabled-password --gecos "" app
#RUN sudo usermod -aG sudo app
#RUN cd .. && cd .. && sudo chmod 777 /root/.cache

#RUN chown app:admin /root/.cache
#RUN pip install gunicorn
EXPOSE 5005
#CMD [ "gunicorn","-b", "0.0.0.0:5005", "wsgi:application"]
#CMD ["python", "app.py"]
