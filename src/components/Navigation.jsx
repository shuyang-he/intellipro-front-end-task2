import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Top from "../containers/Top";

const Navigation = ({ page }) => {
  let path = "";
  let link = "";
  if (page === "home") {
    path = "/create";
    link = "Create";
  } else if (page === "create") {
    path = "/";
    link = "Home";
  } else if (page === "update") {
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
