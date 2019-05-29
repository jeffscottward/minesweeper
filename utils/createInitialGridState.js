export default function (opts) {
  let grid = [];
  let threshHold

  switch (opts.difficulty) {
    case "easy":
      threshHold = 5;
      break;
    case "medium":
      threshHold = 10;
      break;
    case "hard":
      threshHold = 15;
      break;
    default:
      threshHold = 5;
      break;
  }

  // Outer loop to create ROWS ( Y - VALUE )
    for (let y = 0; y < opts.XY; y++) {
      let children = [];
      
      //Inner loop to create ELEMENTS ( x - VALUE )
      for (let x = 0; x < opts.XY; x++) {
        let mine = false
        
        // Determine mines
        if (Math.round(Math.random() * 100) <= threshHold) {
          mine = true;
        }
        
        // Add cell
        children.push({
          proximityNum: 0,
          cleared: false,
          mine: mine,
          flagged: false
        });
      }

      // Add row to grid
      grid.push(children);
    }

  return grid
}