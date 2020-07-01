export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: {
      id: id,
    },
  };
};
