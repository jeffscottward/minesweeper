import React from "react";
import MineSweeperApp from "../components/MineSweeperApp";

const Index = () => (
  <>
    <MineSweeperApp />
    <style jsx global>{`
      * {
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 16px;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      ul {
        display: flex;
      }
      ul,
      li {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      header, footer {
        color: white;
        padding: 10px;
      }
      button {
        cursor: pointer;
      }
      a {
        margin: 0 10px 0 0;
        color: white;
        font-size: 12px;
      }
    `}</style>
  </>
);
export default Index;
