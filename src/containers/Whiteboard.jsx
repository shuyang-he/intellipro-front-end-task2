import React from "react";
import PropTypes from "prop-types";

const style = {
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexBasis: "75%",
};

const Whiteboard = ({ children }) => {
  return (
    <div id="whiteboard" style={style}>
      {children}
    </div>
  );
};

Whiteboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Whiteboard;
