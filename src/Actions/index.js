export const login = (name) => {
  return {
    type: "LOGIN",
    payload: name,
  };
};

export const addTodo = (todo) => {
  return {
    type: "ADD",
    payload: todo,
  };
};

export const removeTodo = (idx) => {
  return {
    type: "REMOVE",
    payload: idx,
  };
};
