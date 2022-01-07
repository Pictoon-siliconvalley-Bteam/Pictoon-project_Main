from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from style_transfer.cli import *
import time
from style_transfer import style_transfer

application = Flask(__name__)

@application.route('/')
def upload():
    return render_template('upload.html')


@application.route('/uploader', methods=['GET', 'POST'])
def upload_process():
    if request.method == 'POST':
        f = request.files['files']
        f2 = request.files['files2']
        f.save('./' +secure_filename("source.jpg"))
        f2.save('./' + secure_filename("style.jpg"))
        return render_template('process.html')

@application.route('/process',methods=['GET','POST'])
def process():
    if request.method=='POST':
        main()
        long_load()
        return "변환완료."

def long_load():
    time.sleep(100)
    return "You typed: %s"




