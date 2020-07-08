import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import UpdateForm from "./UpdateForm";

const UpdatePage = ({ match, history, location }) => {
  return (
    <>
      <Navigation page="update" />
      <UpdateForm match={match} />
    </>
  );
};

export default withRouter(UpdatePage);
