import { ADD_MSG, ADD_USER, ADD_CHAT, ADD_STATE_USER } from "./StoreEvents";

let messageOrder = 0;

export const addMsg = (text, chatId, userName) => ({
  type: ADD_MSG,
  id: messageOrder++,
  text,
  chatId,
  userName
});

export const addUser = userId => ({
  type: ADD_USER,
  userId
});

export const addStateUser = user => ({
  type: ADD_STATE_USER,
  userInfo: user
});
