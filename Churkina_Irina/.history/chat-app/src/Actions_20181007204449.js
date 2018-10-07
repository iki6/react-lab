import { ADD_MSG, ADD_USER } from "./StoreEvents";

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
