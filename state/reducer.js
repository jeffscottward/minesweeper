import createInitialGridState from '../utils/createInitialGridState'
import globalValues from "../constants/globalValues";

function boxSniffer (state, coord) {
  let gridState = state.data.gridState;
  let mineCount = 0

  function boundaryChecker(desiredCoord) {
    if (desiredCoord >= 0 && desiredCoord < globalValues.XY) {
      return true;
    }  
  }
  
  for (let indexX = -1; indexX <= 1; indexX++) {
    if(boundaryChecker(indexX)){
      for (let indexY = -1; indexY <= 1; indexY++) {
        if (boundaryChecker(indexY)) {
          gridState[coord.X + indexX][coord.Y + indexY].mine === true
            ? mineCount++
            : null;
        }
      }
    }
  }

  // gridState[coord.X - 1][coord.Y - 1].mine === true ? mineCount++ : null;
  // gridState[coord.X][coord.Y - 1].mine === true ? mineCount++ : null
  // gridState[coord.X + 1][coord.Y - 1].mine === true ? mineCount++ : null

  // gridState[coord.X - 1][coord.Y].mine === true ? mineCount++ : null
  // gridState[coord.X][coord.Y].mine === true ? mineCount++ : null
  // gridState[coord.X + 1][coord.Y].mine === true ? mineCount++ : null

  // gridState[coord.X - 1][coord.Y + 1].mine === true ? mineCount++ : null
  // gridState[coord.X][coord.Y + 1].mine === true ? mineCount++ : null
  // gridState[coord.X + 1][coord.Y + 1].mine === true ? mineCount++ : null

  return mineCount
}

export default function reducer (state, action) {
  // console.log(state, action);
  const gridState = state.data.gridState;
  switch (action.type) {
    /*
      Square STATES:
      square (defualt)
      flagged
      cleared
      bombed
      bombed.trigger
      space-X (1-5)
    */
    case "SET_GRIDSTATE":
      let coordGS = action.payload;
      let gridSquare = gridState[coordGS.X][coordGS.Y];
      if (gridSquare.mine) {
        // Stop game timer
        // Show all mines
      }
      if (!!gridSquare.cleared === false) {
        state.data.gridState[coordGS.X][coordGS.Y].cleared = true;
        state.data.gridState[coordGS.X][coordGS.Y].flagged = false;
        state.data.gridState[coordGS.X][coordGS.Y].proximityNum = boxSniffer(state, coordGS);       
        reducer(state, { type: "ADD_POINT" });
      }
      return { ...state };
    case "ADD_POINT":
      state.data["scorePointCount"] += 1;
      return { ...state };

    case "SET_FLAG":
      let coordF = action.payload;
      let gridSqaureF = state.data.gridState[coordF.X][coordF.Y];
      if(gridSqaureF.cleared !== true) {
        gridSqaureF.flagged = !gridSqaureF.flagged;
      }
      return { ...state };

    case "START_CLOCK":
      return { ...state };

    case "STOP_CLOCK":
      return { ...state };

    case "CLOCK_TICK":
      state.data["scoreTimeCount"] = action.payload;
      return { ...state };

    case "RESET_GAME":
      reducer(state, { type: "RESET_GRID" });
      reducer(state, { type: "RESET_POINTS" });
      reducer(state, { type: "RESET_CLOCK" });
      return { ...state };
    case "RESET_GRID":
      state.data["gridState"] = createInitialGridState({
        XY: globalValues.XY
      });
      return { ...state };
    case "RESET_POINTS":
      state.data["scorePointCount"] = 0;
      return { ...state };
    case "RESET_CLOCK":
      state.data["scoreTimeCount"] = "00:00";
      return { ...state };

    default:
      return { ...state };
      break;
  }
};
