import React from 'react';
import { connect } from 'react-redux';
import './ListsPanel.css';

const ListsPanel = props => {

    return (
        <div className='panel'>
            {
                props.lists.map(list => (
                    <div className='list' key={list.listId}>
                        <div className='heading'>
                            <div className='name'>
                                {list.text}
                            </div>
                            <div className='actions'>
                                <button onClick={props.deleteList(list.listId)}>
                                    {'❌'}
                                </button>
                            </div>
                        </div>
                        <div className='todos'>
                            {
                                list.todos.map(todo => (
                                    <div
                                        className={`todo ${todo.completed ? 'completed' : 'uncompleted'
                                            }`}
                                        key={todo.id}
                                    >
                                        <div className='data'>
                                            <div className='text'>{todo.text}</div>
                                        </div>
                                        <div className='actions'>
                                            <button
                                                onClick={() => props.toggleCompleted(todo.id)}
                                            >
                                                {!todo.completed ? '⏳ finish' : '✔️ reopen'}
                                            </button>
                                            <button onClick={() => props.delete(todo.id)}>
                                                {'❌ delete'}
                                            </button>
                                        </div>
                                    </div>
                                )
                                )
                            }
                            <div className='add'>
                                <button>
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
    toggleCompleted: toggleCompletedAction(dispatch),
});

const connectedPanel = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListsPanel);

export default connectedPanel;