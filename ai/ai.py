from stockfish import Stockfish

stockfish = Stockfish(path="/Users/stockfish/stockfish/", depth=12)

stockfish.set_position(["e2e4", "e7e6"])

move = stockfish.get_best_move()
print("move", move)