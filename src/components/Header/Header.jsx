import React from 'react';
import { connect } from 'react-redux';
import { addListAction, displayHeaderInputAction } from '../../services/redux/actions';
import './Header.css';

const Header = props => {
    //Función que calcula el ID de las nuevas listas
    const newListId = () => {
        let lastIndex = props.lists.length - 1;
        let lastListId = props.lists[lastIndex].listId;
        return lastListId + 1;
    }
    //Función que gestiona la creación de la nueva lista en función del teclado
    const onKeyUpHandle = (e) => {
        if (e.keyCode === 13 && e.target.value.trim()) {
            props.addList(e.target.value.trim(), newListId());
            e.target.value = '';
        }
    };
    //Render condicional del input de creación de nueva lista
    let input;
    if (props.headerInputDisplay) {
        input = 
        <div className='inputContainer'>
            <input
                type='text'
                placeholder='Type the new list name here and press enter'
                onKeyUp={(e) => onKeyUpHandle(e)}
                autoFocus
            />
        </div>;
    }

    return (
        <div className='header'>
            <div className='title'>Task me!</div>
            <div className='listActions'>
                <button onClick={() => props.displayHeaderInput()}>
                    {props.headerInputDisplay ? 'Cancel' : '✚ Add list'}
                </button>
                {input}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addList: addListAction(dispatch),
    displayHeaderInput: displayHeaderInputAction(dispatch)
});

const mapStateToProps = (state) => (
    {
        headerInputDisplay: state.headerInputDisplay,
        lists: state.lists
    }
);

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default connectedHeader;