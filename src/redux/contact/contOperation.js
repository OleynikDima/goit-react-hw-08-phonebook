import axios from 'axios';
import contactAction from './contAction'

// axios.defaults.baseUrl = 'https://goit-phonebook-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4000';
const token ={
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
    axios.defaults.headers.common.Authorization = '';
    }
};

const addTask = ({name,number}) => dispatch => {
    dispatch(contactAction.addItemRequest());

    axios.post('/contacts', {name,number})
    .then(res => {
        dispatch(contactAction.addItemSuccess(res.data));
    })
    .catch(error => dispatch(contactAction.addItemError(error)));
}


const fetchItems = () => (dispatch,getState) => {
    const  {
        auth: { token: persistedToken },
    } = getState();

    if(!persistedToken){
        return;
    }

    token.set(persistedToken);
    dispatch(contactAction.fetchItemRequest());
    axios
      .get('/contacts',)
      .then((res => {

        dispatch(contactAction.fetchItemSuccess(res.data))
    }))
      .catch(error => dispatch(contactAction.fetchItemError(error)))
}

const removeItem = id => dispatch => {
    dispatch(contactAction.removeItemRequest());
    
    axios
      .delete(`/contacts/${id}`)
      .then(()=> dispatch(contactAction.removeItemSuccess(id)))
      .catch(error => dispatch(contactAction.removeItemError(error)))
}

export default {
    addTask,
    fetchItems,
    removeItem,
}