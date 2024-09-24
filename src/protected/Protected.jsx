import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Protected() {
  const auth = localStorage.getItem("booklogin");
  return (
    <>
      <p>Protected</p>
      {auth ? <Outlet /> : <Navigate to={"/"} />}
    </>
  );
}

export default Protected;
