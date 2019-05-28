import React from 'react'

import { StateProvider } from "../state/state";
import Reducer from "../state/reducer";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const MineSweeperApp = () => {
  const initialState = {
    mapInitOptions: {
      XY: 20,
      difficulty: "0",
      highscore: "26834765",
      timer: "10:00"
    },
    data: {
      scoreBombCount: 0,
      scoreTimeCount: 0
    }
  };  
  return (
    <StateProvider
      initialState={initialState}
      reducer={Reducer}>
      <Header />
      <Main />
      <Footer />
    </StateProvider>
  );
};

export default MineSweeperApp;
