import requests
import os
from dotenv import load_dotenv

load_dotenv()  # .envファイルを読み込む

LINE_CHANNEL_TOKEN = os.getenv("LINE_CHANNEL_TOKEN")
TO_USER_ID = os.getenv("TO_USER_ID")

def send_line_message(message: str):
    url = "https://api.line.me/v2/bot/message/push"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {LINE_CHANNEL_TOKEN}"
    }
    data = {
        "to": TO_USER_ID,
        "messages": [
            {
                "type": "text",
                "text": message
            }
        ]
    }
    response = requests.post(url, headers=headers, json=data)
    return response.status_code, response.text

if __name__ == "__main__":
    status, text = send_line_message("テストメッセージ")
    print("Status:", status)
    print("Response:", text)

if __name__ == "__main__":
    status, text = send_line_message("テストメッセージ from local")
    print("Status:", status)
    print("Response:", text)