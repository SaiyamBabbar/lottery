import React, { useState, useEffect } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";

const Lottery = () => {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;
  let [showWinningMessage, setShowWinningMessage] = useState(false);

  let buyTicket = () => {
    setTicket(genTicket(3));
    setShowWinningMessage(false); // Reset winning message visibility
  };

  useEffect(() => {
    if (isWinning) {
      setShowWinningMessage(true);
      setTimeout(() => {
        setShowWinningMessage(false);
      }, 3000); // Hide winning message after 3 seconds
    }
  }, [isWinning]);

  return (
    <div className="style">
      <h1 className="h11">Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />

      <button onClick={buyTicket}>Buy New Ticket</button>

      {showWinningMessage && (
        <h3 className="winning-message">Congratulations, you won!</h3>
      )}
    </div>
  );
};

export default Lottery;
