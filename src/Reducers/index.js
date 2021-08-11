import { combineReducers } from "redux";
import userReducer from "../Reducers/userReducer";
import todoReducer from "../Reducers/todoReducer";

const allReducers = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export default allReducers;
