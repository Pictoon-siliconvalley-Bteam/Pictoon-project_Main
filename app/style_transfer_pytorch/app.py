from flask import Flask, render_template, request, make_response, send_file, jsonify
from werkzeug.utils import secure_filename
from style_transfer.cli import *
import time
from style_transfer import style_transfer
import tasks
import json
import cv2
application = Flask(__name__)

# @application.route("/api")
# def upload():
#         f = request.files['files']
#         f2 = request.files['files2']
#         f.save('./style_transfer/image/' + secure_filename("source.jpg"))
#         f2.save('./style_transfer/image/' + secure_filename("style.jpg"))
#         job = tasks.start.delay()
#         while():
#             if job.ready():
#                 res = request.post("http://127.0.0.1:3000/result", 'out/out.png').json()
#                 return jsonify(res)
#             else:
#                 continue
@application.route("/api")
def test():
    print('1')
    job = tasks.start.delay()
# @application.route("/api/getimage")
# def send_image():
#     if request.method!="POST":
#         return jsonify(None), 405
#     try:
#


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

