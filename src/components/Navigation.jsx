import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Top from "../containers/Top";

const style = {
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  buttons: {
    padding: "20px",
  },
  button: {
    backgroundColor: "#3366ff",
    padding: "0.5em",
  },
};

const Navigation = () => {
  const location = useLocation();
  const pathname = location.pathname;
  let path = "";
  let link = "";
  if (pathname === "/") {
    path = "/create";
    link = "Create";
  } else if (pathname === "/create") {
    path = "/";
    link = "Home";
  } else if (pathname === "/update") {
    path = "/";
    link = "Home";
  } else {
    path = "/";
    link = "Home";
  }
  return (
    <Top>
      <div style={style.header}>
        <h1>Todo List</h1>
      </div>
      <div style={style.buttons}>
        <button style={style.button}>
          <Link to={path}>{link}</Link>
        </button>
      </div>
    </Top>
  );
};

Navigation.propTypes = {
  page: PropTypes.string,
};

export default Navigation;
