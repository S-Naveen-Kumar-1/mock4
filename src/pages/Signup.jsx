import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/Authenticate/actions";

import { useToast } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
export const Signup = () => {
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      avatar: image,
      email,
      password,
    };
    toast({
      title: "Account Created ",
      // description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch(signUp(userData));
    navigate(-1);
    <Navigate to={"/login"}></Navigate>;
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter Profile Url"
        />
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
        <button>Signin</button>
      </form>
    </div>
  );
};
