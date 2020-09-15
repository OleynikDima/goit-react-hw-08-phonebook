import {combineReducers} from 'redux'
import contactsAction from './contAction';
import {createReducer} from '@reduxjs/toolkit';
import contAction from './contAction';


const newItemObj = (state,action) => {
    return [...state, action.payload]
}

const findContactFilter = (state,action) => {
    return action.payload;
}

const removeItems = (state,action) => {
    return state.filter(contact => contact.id !== action.payload);
}



const items = createReducer([],{
    [contactsAction.fetchItemSuccess]:(state,action) => action.payload,
    [contactsAction.addItemSuccess]:newItemObj,
    [contactsAction.removeItemSuccess]:removeItems,

})

const filter = createReducer('', {
    [contAction.changeFilter]:findContactFilter
});


export default combineReducers ({
    items,
    filter,
})