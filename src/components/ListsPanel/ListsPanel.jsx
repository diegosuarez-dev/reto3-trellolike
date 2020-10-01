import React from 'react';
import { connect } from 'react-redux';
import { deleteListAction, dragTodoAction, switchTodoPositionAction, deleteTodoAction, toggleCompleteAction, displayListInputAction, displayTodoEditInputAction } from '../../services/redux/actions';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import './ListsPanel.css';

const ListsPanel = props => {
    let draggedItem;
    const handleDragStart = (todoText, todoDescription, todoId, todoCompleted, listId) => {
        draggedItem = {
            todoText: todoText,
            todoDescription: todoDescription,
            todoId: todoId,
            todoCompleted: todoCompleted,
            listId: listId
        }
    };
    return (
        <div className='panel'>
            {props.lists.map(list => (
                <div className='list' key={list.listId}
                    onDragOver={e => e.preventDefault()}
                    onDragEnter={e => e.preventDefault()}
                    onDrop={() => props.dragTodo(draggedItem.todoText, draggedItem.todoDescription, draggedItem.todoId, draggedItem.todoCompleted, draggedItem.listId, list.listId)}>
                    <div className='heading'>
                        <div className='name'>
                            {list.text}
                        </div>
                        <div className='actions'>
                            <button className='edit'>
                                {'✎'}
                            </button>
                            <button className='delete' onClick={() => props.deleteList(list.listId)}>
                                {'✘'}
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
                                    draggable
                                    onDragStart={() => handleDragStart(todo.text, todo.description, todo.id, todo.completed, list.listId)}
                                    onDragOver={e => e.preventDefault()}
                                    onDragEnter={e => e.preventDefault()}
                                    onDrop={() => props.switchTodoPosition(draggedItem.todoText, todo.text, draggedItem.todoDescription, todo.description, draggedItem.todoId, todo.id, draggedItem.todoCompleted, todo.completed, draggedItem.listId, list.listId)}
                                >
                                    <div className='data'>
                                        <h5 className='text'>{todo.text}</h5>
                                        <p className='description'>{todo.description}</p>
                                    </div>
                                    <div className='actions'>
                                        <button
                                            onClick={() => props.toggleCompleted(todo.id, list.listId)}
                                        >
                                            {!todo.completed ? '☐' : '☑'}
                                        </button>
                                        <button className='edit' onClick={() => props.displayTodoEditInput(todo.id,list.listId)}>
                                            {!todo.editInputDisplay ? '✎' : 'Cancel'}
                                        </button>
                                        <button className='delete' onClick={() => props.deleteTodo(todo.id, list.listId)}>
                                            {'✘'}
                                        </button>
                                    </div>
                                    {todo.editInputDisplay ? <NewTodoForm role={'edit'} listId={list.listId} todoId={todo.id} /> : null}
                                </div>
                            )
                            )
                        }
                        <div className='add'>
                            {list.listInputDisplay ? <NewTodoForm role={'new'} listId={list.listId} /> : null}
                            <button onClick={() => props.displayListInput(list.listId)}>
                                {!list.listInputDisplay ? '✚ Add todo' : 'Cancel'}
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
    deleteTodo: deleteTodoAction(dispatch),
    dragTodo: dragTodoAction(dispatch),
    switchTodoPosition: switchTodoPositionAction(dispatch),
    toggleCompleted: toggleCompleteAction(dispatch),
    displayListInput: displayListInputAction(dispatch),
    displayTodoEditInput: displayTodoEditInputAction(dispatch)
});

const connectedPanel = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListsPanel);

export default connectedPanel;