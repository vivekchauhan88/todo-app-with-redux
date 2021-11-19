export const addTodo = (todo) => {
    return {
        type: 'ADD',
        payload: todo
    }
}

export const deleteTodo = (i) => {
    return {
        type: 'DELETE',
        payload: i
    }
}

export const editTodo = (i, e) => {
    return {
        type: 'EDIT',
        payload: [i, e]
    }
}