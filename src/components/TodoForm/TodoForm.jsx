import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoAction, editTodoAction } from '../../services/redux/actions';
import './TodoForm.css';

const TodoForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = event => {
        setTitle(event.target.value);
    }
    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (props.role === 'new') {
            props.addTodo(title, description, props.listId);
            console.log({ title: title, description: description, listId: props.listId });
        } else {
            props.editTodo(title,description, props.todoId, props.listId);
        }
    }

    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} placeholder="Task name" onChange={handleTitleChange} required autoFocus />
            <input type="text" name="description" value={description} placeholder="Task description (optional)" onChange={handleDescriptionChange} />
            <button type="submit">{props.role === 'new' ? 'Create it' : 'Update it'}</button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: addTodoAction(dispatch),
    editTodo: editTodoAction(dispatch)
});

const connectedForm = connect(
    null,
    mapDispatchToProps,
)(TodoForm);

export default connectedForm;