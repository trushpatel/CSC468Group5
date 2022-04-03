import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="suppliers",
    user="postgres",
    password="Abcd1234"
)

cur = conn.cursor()
cur.execute("SELECT version()")

version = cur.fetchone()
print(version)