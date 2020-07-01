export const updateItem = (id) => {
  return {
    type: 'UPDATE_ITEM',
    payload: {
      id: id
    }
  };
};

export const updateHandler = (event) => {
  return {
    type: 'UPDATE_CHANGE',
    payload: {
      body: event.target.value
    }
  };
};

export const updateSubmit = () => {
  return {
    type: 'UPDATE_SUBMIT'
  };
};
