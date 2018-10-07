import {ADD_CHAT, ADD_MSG, ADD_STATE_USER} from "./StoreEvents";

const Messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MSG:
      return [...state, { id: action.id, text: action.text }];
	case ADD_STATE_USER:
	debugger
      return [...state, { id: action.chatId }];
    default:
      return state;
  }
};

export default Messages;
