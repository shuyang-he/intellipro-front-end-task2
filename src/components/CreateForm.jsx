import React from "react";
import PropTypes from "prop-types";
import Form from "./Form";

const createForm = ({ item, handler, createItem, submit }) => {
  return (
    <Form
      label="New Item"
      item={item}
      handler={handler}
      createItem={createItem}
      submit={submit}
    />
  );
};

createForm.propTypes = {
  item: PropTypes.object,
  handler: PropTypes.func,
  createItem: PropTypes.func,
  submit: PropTypes.func,
};

export default createForm;
