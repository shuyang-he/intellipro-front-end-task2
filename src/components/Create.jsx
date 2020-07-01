import React from "react";
import Navigation from "./Navigation";
import CreateForm from "../containers/CreateFormContainer";

const create = () => {
  return (
    <>
      <Navigation page="create" />
      <CreateForm />
    </>
  );
};

export default create;
