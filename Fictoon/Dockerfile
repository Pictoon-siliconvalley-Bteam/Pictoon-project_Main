FROM python:3.6


COPY . /app
WORKDIR /app/BackEnd/flask
RUN pip3 install -r requirement.txt
EXPOSE 5001
CMD ["python","app.py"]