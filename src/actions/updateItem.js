export const updateItem = ({ id, body, completed }) => {
  return {
    type: "UPDATE_ITEM",
    payload: {
      id: id,
      body: body,
      completed: completed,
    },
  };
};

export const updateHandler = (event) => {
  return {
    type: "UPDATE_CHANGE",
    payload: {
      body: event.target.value,
    },
  };
};

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
