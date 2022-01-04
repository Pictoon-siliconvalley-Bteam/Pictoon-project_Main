from flask import Flask, flash, redirect, render_template, request, url_for, send_from_directory, session
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.secret_key = "super secret key"
app.config['UPLOAD_FOLDER'] = '/Users/seonghanim/PycharmProjects/JolJak/Fictoon-project/Fictoon/backend'

@app.route('/upload')
def upload_file():
    return render_template('upload.html')


@app.route('/uploader', methods=['POST'])
def uploader_file():
    if request.method == 'POST':
        file = request.files['file']
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        return 'file uploaded successfully'


if __name__ == '__main__':
    app.debug = True
    app.run(host = '0.0.0.0')