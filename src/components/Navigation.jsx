import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Top from "../containers/Top";

const navigation = ({ page }) => {
  let path = "";
  let link = "";
  if (page === "home") {
    path = "/create";
    link = "Create";
  } else if (page === "create") {
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

navigation.propTypes = {
  page: PropTypes.string,
};

export default navigation;
