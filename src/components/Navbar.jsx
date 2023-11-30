import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <h1>StackFLow</h1>
      <LINK>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/forum"}>Forum</Link>
      </LINK>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  padding: 15px;
  background-color: teal;
  font-size: 20px;
  color: white;
`;
const LINK = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
`;
