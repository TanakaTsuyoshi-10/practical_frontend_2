from sqlalchemy import create_engine

import os
from dotenv import load_dotenv

print(">>> スクリプトは実行された")


# 環境変数の読み込み
load_dotenv()

# データベース接続情報
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')

# 環境変数を出力してみる
print("DB_USER:", os.getenv('DB_USER'))
print("DB_PASSWORD:", os.getenv('DB_PASSWORD'))
print("DB_HOST:", os.getenv('DB_HOST'))
print("DB_PORT:", os.getenv('DB_PORT'))
print("DB_NAME:", os.getenv('DB_NAME'))
print("SSL_CA_PATH:", os.getenv('SSL_CA_PATH'))

# MySQLのURL構築
DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

SSL_CA_PATH = os.getenv('SSL_CA_PATH')
# エンジンの作成
engine = create_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True,
    pool_recycle=3600,
    connect_args={
        "ssl_ca": SSL_CA_PATH
    }
)

def test_db_connection():
    try:
        with engine.connect() as connection:
            print("Success")
            print(f"Connected to: {engine.url}")
    except Exception as e:
        print(f"Failed to connect to the database via SQLALchemy engine:{e}")

if __name__ == "__main__":
    test_db_connection()
