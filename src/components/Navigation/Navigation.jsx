import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Top from "../../containers/Top";
import style from "./Navigation.css";

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
      <div className={style.header}>
        <h1>Todo List</h1>
      </div>
      <div className={style.buttons}>
        <button className={style.button}>
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
