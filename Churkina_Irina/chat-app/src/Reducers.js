import { ADD_MSG, ADD_STATE_USER } from "./StoreEvents";

const Messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MSG:
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
      return [...state, { userInfo: action.userInfo }];
    default:
      return state;
  }
};

export default Messages;
