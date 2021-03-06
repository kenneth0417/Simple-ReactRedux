const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter((todo, idx) => idx !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;
