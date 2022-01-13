FROM python:3.6


COPY .. /app
WORKDIR /app/style_transfer_pytorch
RUN pip3 install -r requirements.txt
#RUN pip install gunicorn
EXPOSE 5005
#CMD [ "gunicorn","-b", "0.0.0.0:5005", "wsgi:application"]
#CMD ["python", "app.py"]
