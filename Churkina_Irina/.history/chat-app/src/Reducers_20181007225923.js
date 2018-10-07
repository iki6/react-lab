import { ADD_CHAT, ADD_MSG, ADD_STATE_USER } from "./StoreEvents";

const Messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MSG:
      debugger;
      return [
        ...state,
        {
          id: action.chatId,
          text: action.text,
          order: action.messageOrder,
          user: action.userName
        }
      ];
    case ADD_STATE_USER:
      debugger;
      return [...state, { userInfo: action.userInfo }];
    default:
      return state;
  }
};

export default Messages;
