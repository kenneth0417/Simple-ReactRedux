import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Actions";
import styled from "styled-components";

const Header = styled.p``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
`;

const Todo = styled.p``;

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: red;
  border-radius: 5px;
  cursor: pointer;
  color: #ffff;
  font-weight: 500;
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  return (
    <>
      <Header>My Todos</Header>
      {todos.map((todo, idx) => (
        <Wrapper key={idx}>
          <Todo>{todo}</Todo>
          <Button onClick={() => dispatch(removeTodo(idx))}>X</Button>
        </Wrapper>
      ))}
    </>
  );
};

export default TodoList;
