const initialState = {
  curId: 0,
  data: [],
  createItem: '',
  updateItem: ''
};

let list = null;
let index = 0;
let newItem = {};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CHANGE':
      list = JSON.parse(JSON.stringify(state));
      list.createItem = JSON.parse(JSON.stringify(action.payload.body));
      return list;
    case 'CREATE_SUBMIT':
      list = JSON.parse(JSON.stringify(state));
      newItem = {
        id: list.curId,
        body: list.createItem,
        complete: false
      };
      list.curId += 1;
      list.data.push(JSON.parse(JSON.stringify(newItem)));
      return list;
    case 'DELETE_ITEM':
      list = JSON.parse(JSON.stringify(state));
      index = list.data.findIndex((item) => {
        return item.id === action.payload.id;
      });
      list.data.splice(index, 1);
      return list;
    default:
      return state;
  }
};

export default todoList;
