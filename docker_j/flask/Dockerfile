# Baseline 이미지
FROM python:3

WORKDIR /app

# 라이브러리 업데이트 및 설치
RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev \
    build-essential libssl-dev libffi-dev python3-setuptools

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# flask-app에 필요한 dir 생성
RUN mkdir -p static/uploads

# requirements.txt 파일 내부에 있는 라이브러리 전부 설치
COPY ./flask/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

EXPOSE 5000
#COPY . .

# CMD tail -f /dev/null
# CMD [ "python3", "app.py" ]
# CMD gunicorn -w 1 -b 0.0.0.0:5000 app:app