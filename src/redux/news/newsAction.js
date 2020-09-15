import {createAction} from '@reduxjs/toolkit';


const newsFetchRequest = createAction('news/newsFetchRequest');
const newsFetchSuccess = createAction('news/newsFetchSuccess');
const newsFetchError = createAction('news/newsFetchError');


export default {
    newsFetchRequest,
    newsFetchSuccess,
    newsFetchError,
}