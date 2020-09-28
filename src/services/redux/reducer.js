const initialState = {
    lists: [
        {
            text: 'lista demo 1',
            listId: 0,
            todos: [
                {
                    text: 'tarea demo 1',
                    id: 1,
                    completed: true,
                },
                {
                    text: 'tarea demo 2',
                    id: 2,
                    completed: false,
                },
                {
                    text: 'tarea demo 3',
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
                lists: [
                    ...state.lists,
                    {
                        text: action.payload,
                        listId: action.listId,
                        todos: []
                    },
                ],
            };
        case 'DELETE_LIST':
            return {
                lists: state.listId.filter(
                    (list) => list.listId !== action.listId,
                ),
            };
        case 'ADD_TODO':
            return {
                
            }
        case 'DELETE_TODO':
            return {

            }
        case 'TOGGLE_COMPLETED_TODO':
            return {

            }
        default:
            return state;
    }
}

export default reducer;