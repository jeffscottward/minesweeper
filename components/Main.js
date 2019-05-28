import React from "react";
import Scoreboard from './Scoreboard'
import Board from "./Board";

const Main = () => {
  return (
    <main>
      <Scoreboard />
      <Board />
      <style jsx>{`
        main {
          display: inline-block;
          margin: 50px auto;
          border: 1px solid #bfbfbf;
        }
      `}</style>
    </main>
  );
}

export default Main;
