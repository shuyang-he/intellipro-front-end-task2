const initialState = {
  curId: 0,
  data: [],
  createItem: {},
  updateItem: {}
};

let list = null;
let index = 0;
let newItem = {};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      list = JSON.parse(JSON.stringify(state));
      newItem = {
        id: list.curId,
        body: '',
        complete: false
      };
      list.curId += 1;
      list.createItem = newItem;
      return list;
    case 'CREATE_CHANGE':
      list = JSON.parse(JSON.stringify(state));
      list.createItem.body = JSON.parse(JSON.stringify(action.payload.body));
      return list;
    case 'CREATE_SUBMIT':
      list = JSON.parse(JSON.stringify(state));
      list.data.push(list.createItem);
      list.createItem = {};
      return list;
    case 'DELETE_ITEM':
      list = JSON.parse(JSON.stringify(state));
      index = list.data.findIndex((item) => {
        return item.id === action.payload.id;
      });
      list.data.splice(index, 1);
      return list;
    case 'UPDATE_ITEM':
      list = JSON.parse(JSON.stringify(state));
      index = list.data.findIndex((item) => {
        return item.id === action.payload.id;
      });
      list.updateItem = list.data[index];
      return list;
    case 'UPDATE_CHANGE':
      list = JSON.parse(JSON.stringify(state));
      list.updateItem.body = action.payload.body;
      return list;
    case 'UPDATE_SUBMIT':
      list = JSON.parse(JSON.stringify(state));
      list.data[index] = list.updateItem;
      list.updateItem = {};
      return list;
    default:
      return state;
  }
};

export default todoList;
