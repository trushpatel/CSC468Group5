import psycopg2

conn = psycopg2.connect( # need to fill this in with actual credentials
    host="localhost",
    database="suppliers",
    user="postgres",
    password="Abcd1234"
)

cur = conn.cursor()
cur.execute("SELECT version()")

version = cur.fetchone()
print(version)