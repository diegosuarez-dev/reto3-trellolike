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

export const deleteTodoAction = (dispatch) => (id) =>
    dispatch({
        type: 'DELETE_TODO',
        todoId: id,
    });

export const toggleCompleteAction = (dispatch) => (id) =>
    dispatch({
        type: 'TOGGLE_COMPLETED_TODO',
        todoId: id,
    });