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

export const editTodoAction = (dispatch) => (title, description, todoId, listId) => 
    dispatch({
        type: 'EDIT_TODO',
        title: title,
        description: description,
        todoId: todoId,
        listId: listId
    });

export const dragTodoAction = (dispatch) => (todoText, todoDescription, todoId, todoCompleted, prevListId, newListId) => {
    if (prevListId !== newListId) {
        dispatch({
            type: 'DRAG_TODO_TO_OTHER_LIST',
            todoText: todoText,
            todoDescription: todoDescription,
            todoId: todoId,
            todoCompleted: todoCompleted,
            prevListId: prevListId,
            newListId: newListId
        });
    }
};

export const switchTodoPositionAction = (dispatch) => (startTodoText, endTodoText, startTodoDescription, endTodoDescription, startTodoId, endTodoId, startTodoCompleted, endTodoCompleted, prevListId, newListId) => {
    if (prevListId === newListId) {
        dispatch({
            type: 'SWITCH_TODOS_IN_SAME_LIST',
            startTodoText: startTodoText,
            endTodoText: endTodoText,
            startTodoDescription: startTodoDescription,
            endTodoDescription: endTodoDescription,
            startTodoId: Date.now(), //Necesito asignar un nuevo ID para evitar conflicto de keys duplicados
            endTodoId: Date.now() + 1, //Necesito asignar un nuevo ID para evitar conflicto de keys duplicados
            startTodoCompleted: startTodoCompleted,
            endTodoCompleted: endTodoCompleted,
            prevListId: prevListId,
        });
    } 
}

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

export const displayHeaderInputAction = (dispatch) => () =>
    dispatch({
        type: 'TOGGLE_DISPLAY_HEADER_INPUT',
    });

export const displayListInputAction = (dispatch) => (listId) =>
    dispatch({
        type: 'TOGGLE_DISPLAY_LIST_INPUT',
        listId: listId,
    });

export const displayTodoEditInputAction = (dispatch) => (todoId, listId) => 
    dispatch({
        type: 'TOGGLE_DISPLAY_TODO_EDIT_INPUT',
        todoId: todoId,
        listId: listId
    });