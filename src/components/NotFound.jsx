import React from "react";
import PropTypes from "prop-types";
import Top from "../containers/Top";
import Whiteboard from "../containers/Whiteboard";

const NotFound = () => {
  return (
    <>
      <Top>
        <h1>404 Page Not Found.</h1>
      </Top>
      <Whiteboard />
    </>
  );
};

export default NotFound;
