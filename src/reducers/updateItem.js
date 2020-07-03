let newState = {};
const updateItem = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_ITEM":
      return {
        id: action.payload.id,
        body: action.payload.body,
        completed: action.payload.completed,
      };
    case "UPDATE_CHANGE":
      newState = { ...state };
      newState.body = action.payload.body;
      return newState;
    case "UPDATE_SUBMIT":
      return {};
    default:
      return state;
  }
};

export default updateItem;
