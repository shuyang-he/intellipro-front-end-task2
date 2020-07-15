import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Top from "../containers/Top";

const Navigation = ({ location }) => {
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
  }
  return (
    <Top>
      <h1>Todo List</h1>
      <Link to={path}>{link}</Link>
    </Top>
  );
};

Navigation.propTypes = {
  page: PropTypes.string,
};

export default Navigation;
