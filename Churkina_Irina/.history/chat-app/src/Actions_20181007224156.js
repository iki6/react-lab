import { ADD_MSG, ADD_USER, ADD_CHAT, ADD_STATE_USER } from "./StoreEvents";

let nextTodoId = 0;

export const addMsg = text => ({
  type: ADD_MSG,
  id: nextTodoId++,
  text
});

export const addUser = userId => ({
  type: ADD_USER,
  userId
});

export const addStateUser = user => ({
  type: ADD_STATE_USER,
  userInfo: user
});