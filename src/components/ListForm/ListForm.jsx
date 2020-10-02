import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editListAction } from '../../services/redux/actions';
import './ListForm.css';

const ListForm = (props) => {
    const [title, setTitle] = useState('');

    const handleTitleChange = event => {
        setTitle(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.editList(title,props.listId);
    }
    return (
        <form className="listForm" onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} placeholder="List name" onChange={handleTitleChange} required autoFocus />
            <button type="submit">Update it</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    editList: editListAction(dispatch)
});

const connectedForm = connect(
    null,
    mapDispatchToProps,
)(ListForm);

export default connectedForm;