import React from "react";
// import {useStateValue} from "../state/state";

const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <div className="app-banner">
          <h1>Minesweeper</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">High Scores</a>
            </li>
            <li>
              <a href="#">Troll Box</a>
            </li>
            <li>
              <a href="#">Login/Register</a>
            </li>
          </ul>
        </nav>
        <div className="account-area" />
      </div>
      <style jsx>{`
        header {
          background: #333;
        }
        h1 {
          margin-top: 0;
        }
      `}</style>
    </header>
  );
};

export default Header;
