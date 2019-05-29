import React from "react";
import Scoreboard from './Scoreboard'
import Board from "./Board";
import { useStateValue } from "../state/state";

const Main = () => {
  const [{ data }, dispatch] = useStateValue();
  !!data.gridState === false ? dispatch({type: "RESET_GAME"}) : null
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
