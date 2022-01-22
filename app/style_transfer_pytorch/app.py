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
        print("1")
        f = request.files['files']
        f.save('./style_transfer/image/' + secure_filename("source.jpg"))
        print("2")
        f2 = request.files['files2']
        print("3")
        f2.save('./style_transfer/image/' + secure_filename("style.jpg"))
        print("4")
        job = tasks.start.delay()
        print("5")
        job.get()
        print("6")
        s3 = s3_connection()
        print("7")
        out = open('out/out.png', 'rb')
        s3.put_object(
            Bucket=BUCKET_NAME,
            Body=out,
            Key='out',
        )
        print("8")
        url = s3_get_image_url(s3, 'out.png')
        print(url)
        print("9")
        return url

# @application.route('/progress')
# def progress():
#     jobid = request.values.get('jobid')
#     if jobid:
#         job = tasks.get_job(jobid)
#         if job.state == 'PROGRESS':
#             return json.dumps(dict(
#                 state=job.state,
#                 progress=job.result['current'],
#             ))
#         elif job.state == 'SUCCESS':
#             return json.dumps(dict(
#                 state=job.state,
#                 progress=1.0,
#             ))
#     return '{}'

# @application.route('/process',methods=['GET','POST'])
# def process():
#     if request.method=='POST':
#         print('2')
#         #job=tasks.start.delay()
#         return "변환중."
# #
# def long_load():
#     time.sleep(100)
#     return "You typed: %s"

# if __name__ == '__main__':
#     application.run(debug=True,host='0.0.0.0',port=5005)
