let newState = [];
const todoList = (state = [], action) => {
  switch (action.type) {
    case "CREATE_SUBMIT":
      return [
        ...state,
        {
          id: action.payload.id,
          body: action.payload.body,
          completed: false,
        },
      ];
    case "DELETE_ITEM":
      newState = [...state];
      newState.splice(
        newState.findIndex((item) => {
          return item.id === action.payload.id;
        }),
        1
      );
      return newState;
    case "UPDATE_SUBMIT":
      newState = [...state];
      newState.splice(
        newState.findIndex((item) => {
          return item.id === action.payload.id;
        }),
        1,
        {
          id: action.payload.id,
          body: action.payload.body,
          completed: action.payload.completed,
        }
      );
      return newState;
    default:
      return state;
  }
};

export default todoList;
