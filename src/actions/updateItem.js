export const updateSubmit = ({ id, body, completed }) => {
  return {
    type: "UPDATE_SUBMIT",
    payload: {
      id: id,
      body: body,
      completed: completed,
    },
  };
};
