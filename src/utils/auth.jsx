import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserThunk } from "../store/thunks/getUserThunk";

function Auth(Children) {
  return function ChildComp(props) {
    const { isAuthenticated, user, isLoading } = useSelector(
      (state) => state.user
    );
    const dispatch = useDispatch();

    if (!isAuthenticated) {
      dispatch(getUserThunk());
    }

    if (isAuthenticated) {
      return <Children {...props} />;
    } else {
      <Navigate to="/login" />;
    }
  };
}

export default Auth;
