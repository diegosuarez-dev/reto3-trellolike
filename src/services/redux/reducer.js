const initialState = {
    headerInputDisplay: false,
    lists: [
        {
            text: 'lista demo 1',
            listId: 0,
            listInputDisplay: false,
            todos: [
                {
                    text: 'tarea demo 1',
                    description: 'descripción tarea demo 1',
                    id: 1,
                    completed: true,
                },
                {
                    text: 'tarea demo 2',
                    description: 'descripción tarea demo 2',
                    id: 2,
                    completed: false,
                },
                {
                    text: 'tarea demo 3',
                    description: 'descripción tarea demo 3',
                    id: 3,
                    completed: true,
                },
            ],
        }
    ]
};

function reducer(state = initialState, action) {
    console.log('reducer. action:', action);

    switch (action.type) {
        case 'ADD_LIST':
            return {
                ...state,
                headerInputDisplay: false,
                lists: [
                    ...state.lists,
                    {
                        text: action.payload,
                        listId: action.listId,
                        listInputDisplay: false,
                        todos: []
                    },
                ],
            };
        case 'DELETE_LIST':
            return {
                ...state,
                lists: state.lists.filter(
                    (list) => list.listId !== action.listId,
                ),
            };
        case 'ADD_TODO':
            let newStateAdd = {
                ...state,
                lists: [
                    ...state.lists
                ]
            };
            newStateAdd.lists[action.listId] = {
                text: state.lists[action.listId].text,
                listId: action.listId,
                listInputDisplay: false,
                todos: [
                    ...state.lists[action.listId].todos,
                    {
                        text: action.title,
                        description: action.description,
                        id: action.todoId,
                        completed: action.completed || false
                    }
                ]
            };
            return newStateAdd;
        case 'DELETE_TODO':
            let newStateDel = {
                ...state,
                lists: [
                    ...state.lists
                ]
            };
            newStateDel.lists[action.listId] = {
                text: state.lists[action.listId].text,
                listId: action.listId,
                listInputDisplay: false,
                todos: state.lists[action.listId].todos.filter(todo => todo.id !== action.todoId)
            };
            return newStateDel;
        case 'TOGGLE_COMPLETED_TODO':
            let newStateTog = {
                ...state,
                lists: [
                    ...state.lists
                ]
            };
            newStateTog.lists[action.listId] = {
                text: state.lists[action.listId].text,
                listId: action.listId,
                listInputDisplay: false,
                todos: state.lists[action.listId].todos.map(
                    (todo) => {
                        if (todo.id === action.todoId) {
                            todo.completed = !todo.completed;
                        }
                        return todo;
                    }
                )
            };
            return newStateTog;
        case 'TOGGLE_DISPLAY_HEADER_INPUT':
            return {
                ...state,
                headerInputDisplay: !state.headerInputDisplay,
            };
        case 'TOGGLE_DISPLAY_LIST_INPUT':
            return {
                ...state,
                lists: state.lists.map(
                    (list) => {
                        if (list.listId === action.listId) {
                            list.listInputDisplay = !list.listInputDisplay;
                        }
                        return list;
                    }
                )
            };
        default:
            return state;
    }
}

export default reducer;