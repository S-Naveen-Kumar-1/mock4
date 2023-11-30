import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/Authenticate/actions";
import { USER_LOGGEDIN } from "../redux/Authenticate/actionType";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast, Button } from "@chakra-ui/react";
import styled from "styled-components";
export const Login = () => {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [userLogged, setUser] = useState({});
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loctation = useLocation();
  const { userData } = useSelector((store) => {
    console.log(store);
    return store.authReducer;
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (el) => el.email == email && el.password === password
    );
    if (user) {
      setUser(user);
      console.log("userLogged", userLogged);
      dispatch({ type: USER_LOGGEDIN, payload: userLogged });
      toast({
        title: "Login Success.",
        //   description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate(loctation.state, { replace: true });
    } else {
      alert("Login Failure");
    }
  };
  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </DIV>
  );
};
const DIV = styled.div`
  display: grid;
  width: 20%;
`;
