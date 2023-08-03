from flask import Flask, request, Response
from flask_cors import CORS

app = Flask(__name__)


@app.route('/api/translate/', methods=['POST'])
def receive_webcam_stream():
    # 이미지를 전송받아서 원하는 처리를 수행하는 로직
    # 여기서는 간단히 'true'를 응답으로 보냅니다.
    return Response("true", content_type='text/plain')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
