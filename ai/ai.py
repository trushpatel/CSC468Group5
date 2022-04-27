# import psycopg2

# conn = psycopg2.connect( # need to fill this in with actual credentials
#     host="localhost",
#     database="suppliers",
#     user="postgres",
#     password="Abcd1234"
# )

# cur = conn.cursor()
# cur.execute("SELECT version()")

# version = cur.fetchone()
# print(version)

import http

conn = http.client.HTTPSConnection("localhost", 8443)
conn.request('GET', '/')
resp = conn.getresponse()
print(resp.read())

# from stockfish import Stockfish
# stockfish = Stockfish("/stockfish/stockfish", depth=12)
# stockfish.set_position(["e2e4", "e7e6"])
# stockfish.make_moves_from_current_position(["g4d7", "a8b8", "f1d1"])

