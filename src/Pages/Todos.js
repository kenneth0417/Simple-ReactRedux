import React from "react";
import AddTodo from "../Components/AddTodo";
import TodoList from "../Components/TodoList";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  margin: 7% auto;
  width: 30rem;
  height: 60% auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;

const Header = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Todos = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container>
      <Header>Welcome, {user}</Header>
      <TodoList />
      <AddTodo />
    </Container>
  );
};

export default Todos;
