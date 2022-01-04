from flask import Flask, render_template, request
from werkzeug.utils import secure_filename

# flask 웹서버를 실행 합니다.
app = Flask(__name__)



# 업로드 창을 보여줍니다.
@app.route('/upload')
def upload():
    return render_template('upload.html')


# 실제 업로드 처리를 합니다.
@app.route('/upload_process', methods=['GET', 'POST'])
def upload_process():
    if request.method == 'POST':
        f = request.files['upfile']
        f.save(secure_filename(f.filename))
        return '파일 업로드 완료'


# 이 웹서버는 127.0.0.1 주소를 가지면 포트 5000번에 동작하며, 에러를 자세히 표시합니다
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001, debug=True)