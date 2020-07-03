import React from "react";
import PropTypes from "prop-types";

const style = {
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexBasis: "20%",
  backgroundColor: "lightgray",
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
