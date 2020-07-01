export const createItem = () => {
  return {
    type: "CREATE_ITEM",
  };
};

export const createHandler = (event) => {
  return {
    type: "CREATE_CHANGE",
    payload: {
      body: event.target.value,
    },
  };
};

export const createSubmit = () => {
  return {
    type: "CREATE_SUBMIT",
  };
};
