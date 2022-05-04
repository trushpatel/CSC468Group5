import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import './ad.css';

export const GameSession = ({ setAuth }) => {
  const [game, setGame] = useState(new Chess());
  
  // perform modify function on game state
  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }  // make computer move
  function makeRandomMove() {
    const possibleMoves = game.moves();    // exit if the game is over
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) return;    // select random move
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);    // play random move
    safeGameMutate((game) => {
      game.move(possibleMoves[randomIndex]);
    });
  }  // perform action when piece dropped by user
  function onDrop(sourceSquare, targetSquare) {
    // attempt move
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });
    });
    
    // illegal move made
    if (move === null) return false;    // valid move made, make computer move
    setTimeout(makeRandomMove, 200);
    return true;
  } 

  const [name, setName] = useState("");
    
  async function getName() {
      try {
          const response = await fetch("http://localhost:5000/dashboard", {
              method: "GET",
              headers: { token: localStorage.token }
          });
          const parseRes = await response.json();
          setName(parseRes.user_name);
      } catch (err) {
          console.error(err.message);
      }
  }

  useEffect(() => {
      getName();
  }, []);

  const logout = (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      setAuth(false);
  }
  
  return (
    <Fragment>
        <button className="btn btn-primary my-5" onClick={e => logout(e)}>Logout</button>
        <div>
            <Link to="/dashboard"><button className="btn btn-primary my-5">Back to Dashboard</button></Link>
        </div>
        <h1 className="text-center my-5">Game Session</h1>
        <h2 className="text-center my-5">{name} vs. Computer</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <Chessboard position={game.fen()} onPieceDrop={onDrop} />
        </div>
        <p></p>
        <div class="banner-container">

            <div class = "banner">
                <div class ="campus store">
                    <img src ="WCU store.jpg" alt=""></img>
                </div>
                <div class ="content">
                    <span>upto</span>
                    <h3>50% off</h3>
                    <p>Offer ends soon!</p>
                    <a href="https://www.wcupa.edu/" class ="btn">View offer</a>
                </div>
                <div class ="textbooks">
                    <img src="textbooks.jpg" alt=""></img>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

