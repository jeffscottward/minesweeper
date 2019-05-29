import React from 'react'

import { StateProvider } from "../state/state";
import Reducer from "../state/reducer";

import Header from "./Header";
import Main from "./Main";

const MineSweeperApp = () => {  
  const initialState = {
    data: {
      scorePointCount: 0,
      scoreTimeCount: "00:00",
      gameStarted: false,
      gameEnded: false
    }
  }; 
  return (
    <StateProvider
      initialState={initialState}
      reducer={Reducer}>
      <Header />
      <Main />
    </StateProvider>
  );
};

export default MineSweeperApp;
