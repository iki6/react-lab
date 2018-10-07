import ADD_MSG from './StoreEvents';

let nextTodoId = 0

export const addMsg = text => ({
  type: ADD_MSG,
  id: nextTodoId++,
  text
})