import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <h1>Minesweeper</h1>
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
          margin: 0 20px 0 0;
        }
        .header-wrap {
          display: flex;
        }
      `}</style>
    </header>
  );
};

export default Header;
