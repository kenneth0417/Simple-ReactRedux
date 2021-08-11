import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Actions";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Header = styled.p``;

const Input = styled.input`
  width: 10rem;
  border-radius: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: #fff;
`;
const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(todo));

    setTodo("");
  };
  return (
    <>
      <Header>Add Todo</Header>
      <Wrapper>
        <Input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Wrapper>
    </>
  );
};

export default AddTodo;
