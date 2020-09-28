export const addListAction = (dispatch) => (text, listId) =>
    dispatch({
        type: 'ADD_LIST',
        payload: text,
        listId: listId
    });

export const deleteListAction = (dispatch) => (listId) =>
    dispatch({
        type: 'DELETE_LIST',
        listId: listId
    });

export const addTodoAction = (dispatch) => (title, description, listId) => 
    dispatch({
        type: 'ADD_TODO',
        title: title,
        description: description,
        listId: listId,
        todoId: Date.now(),
        completed: false
    });

export const deleteTodoAction = (dispatch) => (todoId, listId) =>
    dispatch({
        type: 'DELETE_TODO',
        listId: listId,
        todoId: todoId,
    });

export const toggleCompleteAction = (dispatch) => (todoId, listId) =>
    dispatch({
        type: 'TOGGLE_COMPLETED_TODO',
        listId: listId,
        todoId: todoId,
    });