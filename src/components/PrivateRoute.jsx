import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isAUth } = useSelector((store) => {
    console.log(store);
    return store.authReducer;
  }, shallowEqual);
  console.log(isAUth);
  return isAUth ? (
    children
  ) : (
    <Navigate state={location.pathname} replace={true} to="/login"></Navigate>
  );
};
