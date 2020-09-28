import React from 'react';
import { connect } from 'react-redux';
import { deleteListAction, addTodoAction, deleteTodoAction, toggleCompleteAction } from '../../services/redux/actions';
import './ListsPanel.css';

const PrepareTodo = (props, listId) => {
    let title = prompt('Type the task title (required)');
    if (title) {
        let description = prompt('Type the task description (optional)');
        props.addTodo(title, description, listId);
    } else {
        alert('A title is required to add a new task');
    }
}

const ListsPanel = props => {
    console.log(props.lists);
    return (
        <div className='panel'>
            {props.lists.map(list => (
                <div className='list' key={list.listId}>
                    <div className='heading'>
                        <div className='name'>
                            {list.text}
                        </div>
                        <div className='actions'>
                            <button onClick={() => props.deleteList(list.listId)}>
                                {'❌'}
                            </button>
                        </div>
                    </div>
                    <div className='todos'>
                        {
                            list.todos.map(todo => (
                                <div
                                    className={`task ${todo.completed ? 'completed' : ''
                                        }`}
                                    key={todo.id}
                                >
                                    <div className='data'>
                                        <h6 className='text'>{todo.text}</h6>
                                        <p className='description'>{todo.description}</p>
                                    </div>
                                    <div className='actions'>
                                        <button
                                            onClick={() => props.toggleCompleted(todo.id, list.listId)}
                                        >
                                            {!todo.completed ? '⏳ finish' : '✔️ reopen'}
                                        </button>
                                        <button onClick={() => props.deleteTodo(todo.id, list.listId)}>
                                            {'❌ delete'}
                                        </button>
                                    </div>
                                </div>
                            )
                            )
                        }
                        <div className='add'>
                            <button onClick={() => PrepareTodo(props, list.listId)}>
                                {'✚ Add todo'}
                            </button>
                        </div>
                    </div>
                </div>
            )
            )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
    deleteList: deleteListAction(dispatch),
    addTodo: addTodoAction(dispatch),
    deleteTodo: deleteTodoAction(dispatch),
    toggleCompleted: toggleCompleteAction(dispatch),
});

const connectedPanel = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListsPanel);

export default connectedPanel;