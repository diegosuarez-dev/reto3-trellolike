import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../../services/redux/actions';
import './NewTodoForm.css';

const NewTodoForm = (props) => {
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
        props.addTodo(title,description,props.listId);
        console.log({ title: title, description: description, listId: props.listId });
    }

    return (
        <form className="newTodoForm" onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} placeholder="Task name" onChange={handleTitleChange} required autoFocus/>
            <input type="text" name="description" value={description} placeholder="Task description (optional)" onChange={handleDescriptionChange} />
            <button type="submit">Create it</button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: addTodoAction(dispatch),
});

const connectedForm = connect(
    null,
    mapDispatchToProps,
)(NewTodoForm);

export default connectedForm;