import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/sidebar.css";
import { Button } from "@mui/material";

function Sidebar({ children }) {
  return (
    <>
      <div className="container">
        <div className="link">
          <h1 style={{ color: "white" }}> Welcome to Books Store App</h1>
          {/* <NavLink to={"/home"} className={"navlink"}>
            Home
          </NavLink> */}
          <NavLink to={"/add"} className={"navlink"}>
            ADD
          </NavLink>
          <NavLink to={"/edit/:id"} className={"navlink"}>
            Edit
          </NavLink>
          <NavLink to={"/"} className={"navlink"}>
            My Books
          </NavLink>
          <Button variant="contained" color="error">
            Log Out
          </Button>
        </div>
        <main> {children}</main>
      </div>
    </>
  );
}

export default Sidebar;
