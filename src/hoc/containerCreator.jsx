import React from "react";
import PropTypes from "prop-types";

const containerCreator = ({ id, className, style, children }) => {
  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};

containerCreator.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.object,
};

export default containerCreator;
