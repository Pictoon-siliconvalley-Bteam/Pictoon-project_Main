from flask import Flask, render_template, request, make_response, send_file, jsonify
from werkzeug.utils import secure_filename
from style_transfer.cli import *
import time
from style_transfer import style_transfer
import tasks
import json
import cv2
from connection import s3_connection
from config import BUCKET_NAME

application = Flask(__name__)


def save_image(s3, bucket, filepath, access_key):
    try:
        s3.upload_file(
            Filename=filepath,
            Bucket=bucket,
            Key=access_key,
            ExtraArgs={"ContentType": "image/png", "ACL": "public-read"},
        )
    except Exception as e:
        return False
    return True


def s3_get_image_url(s3, filename):
    """
    s3 : 연결된 s3 객체(boto3 client)
    filename : s3에 저장된 파일 명
    """
    location = s3.get_bucket_location(Bucket='fictoonimage')["LocationConstraint"]
    return f"https://{'fictoonimage'}.s3.{location}.amazonaws.com/{filename}.jpg"


@application.route('/api', methods=['GET', 'POST'])
def upload1():
    if request.method == 'POST':
        f = request.files['files']
        f.save('./style_transfer/image/' + secure_filename("source.jpg"))
        f2 = request.files['files2']
        f2.save('./style_transfer/image/' + secure_filename("style.jpg"))
        job = tasks.start.delay()
        job.get()
        s3 = s3_connection()
        out = open('out/out.png', 'rb')
        s3.put_object(
            Bucket=BUCKET_NAME,
            Body=out,
            Key='out' + '.jpg',
        )
        url = s3_get_image_url(s3, 'out')
        print(url)
        return url
