import React from "react";
import PropTypes from "prop-types";

const style = {
  height: "100%",
  postion: "fixed",
  display: "flex",
  flexDirection: "row",
  flexBasis: "10%",
  backgroundColor: "rgb(65, 105, 225)",
  boxShadow: "0px 3px 2px 1px rgba(0, 0, 0, 0.3)",
};

const Top = ({ children }) => {
  return (
    <div id="top" style={style}>
      {children}
    </div>
  );
};

Top.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Top;
