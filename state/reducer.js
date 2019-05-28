export default function (state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.newData
      };
    default:
      break;
  }
};
