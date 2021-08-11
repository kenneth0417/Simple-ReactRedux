import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../Actions/";

const Wrapper = styled.div`
  margin: 15% auto;
  width: 20rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
`;

const Label = styled.p`
  margin-top: -5px;
`;

const Input = styled.input`
  width: 10rem;
  padding: 7.5px;
  border: none;
  background-color: #ffff;
  border-radius: 5px;
`;

const LinkR = styled(Link)`
  margin: 7.5px;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
  width: 5rem;
  text-align: center;

  &:hover {
    background-color: #c7e0c7;
  }
`;

const Form = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Label>Please enter your name.</Label>
      <Input
        type="text"
        placeholder="Your name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!name ? (
        ""
      ) : (
        <LinkR to="/todos" onClick={() => dispatch(login(name))}>
          Submit
        </LinkR>
      )}
    </Wrapper>
  );
};

export default Form;
