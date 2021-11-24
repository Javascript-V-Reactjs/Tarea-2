import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbar = {
    backgroundColor: "var(--background-alt)",
    borderBottom: "1px var(--border) solid",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "16px",
    maxHeight: "40px",
  };

  return (
    <div style={navbar}>
      <Link style={{ display: "block", margin: "1rem" }} to="/">
        Students List
      </Link>
      <Link style={{ display: "block", margin: "1rem" }} to="/addStudent">
        Students Form
      </Link>
    </div>
  );
}

export default Navbar;
