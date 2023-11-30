import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Home } from "./Home";
import { Forum } from "./Forum";
import { PrivateRoute } from "../components/PrivateRoute";
import { Answers } from "./Answers";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/forum"
          element={
            <PrivateRoute>
              <Forum />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/answers/:id"
          element={
            <PrivateRoute>
              <Answers />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};
