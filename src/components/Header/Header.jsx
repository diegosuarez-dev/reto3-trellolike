import React from 'react';
import { connect } from 'react-redux';
import { addListAction } from '../services/redux/actions';
import './Header.css';

const Header = props => {
    const newListId = () => {
        let lastIndex = props.lists.length - 1;
        let lastListId = props.lists[lastIndex].listId;
        return lastListId + 1;
    }

    const onKeyUpHandle = (e) => {
        if (e.keyCode === 13 && e.target.value.trim()) {
            props.addList(e.target.value.trim(),newListId());
            e.target.value = '';
        }
    };
    return (
        <div className='header'>
            <input
                type='text'
                placeholder='type the new list name here'
                onKeyUp={(e) => onKeyUpHandle(e)}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addList: addListAction(dispatch),
});

const mapStateToProps = (state) => (
    {
        lists: state.lists
    }
);

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default connectedHeader;