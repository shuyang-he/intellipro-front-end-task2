let id = 0;
export const createSubmit = (body) => {
  return {
    type: "CREATE_SUBMIT",
    payload: {
      id: id++,
      body: body,
    },
  };
};
