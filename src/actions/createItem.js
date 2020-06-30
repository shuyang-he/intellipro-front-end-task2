export const newItem = () => {
  return {
    type: 'NEW_ITEM'
  };
};

export const createHandler = (event) => {
  return {
    type: 'CREATE_CHANGE',
    payload: {
      body: event.target.value
    }
  };
};

export const createSubmit = () => {
  return {
    type: 'CREATE_SUBMIT'
  };
};
