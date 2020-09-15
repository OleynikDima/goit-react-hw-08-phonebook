import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import newsAction  from './newsAction';



const fetchNews = createReducer([],{
    [newsAction.newsFetchSuccess]:(_, {payload}) => payload
})

export default combineReducers({
    fetchNews
})