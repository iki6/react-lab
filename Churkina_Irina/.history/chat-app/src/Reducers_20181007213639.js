const Messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MSG":
      return [...state, { id: action.id, text: action.text }];
    case "ADD_CHAT":
      debugger;
      return [...state, { id: action }];
    default:
      return state;
  }
};

export default Messages;
