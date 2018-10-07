const Messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MSG":
      return [...state, { id: action.id, text: action.text }];
    default:
      return state;
  }
};

export default Messages;
