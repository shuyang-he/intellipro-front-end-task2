import React from "react";
import PropTypes from "prop-types";
import Form from "./Form";

const updateForm = ({ item, handler, submit }) => {
  return (
    <Form label="Update Item" item={item} handler={handler} submit={submit} />
  );
};

updateForm.propTypes = {
  item: PropTypes.object,
  handler: PropTypes.func,
  submit: PropTypes.func,
};

export default updateForm;
