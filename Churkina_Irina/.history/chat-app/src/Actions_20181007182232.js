let nextTodoId = 0

export const addMsg = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})