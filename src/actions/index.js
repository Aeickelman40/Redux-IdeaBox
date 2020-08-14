
export const addToDo = (todo, name) => ({
    type: 'ADD_TODO',
    todo,
    name
})

export const deleteAllTodos = () => ({
    type: 'DELETE_ALL_TODOS'
})