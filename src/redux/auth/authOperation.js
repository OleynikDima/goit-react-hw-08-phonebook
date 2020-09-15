import axios from 'axios';
import authAction from './authAction';


axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token ={
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
    axios.defaults.headers.common.Authorization = '';
    }
};

const register = credential => dispatch => {
    dispatch(authAction.registerRequest());

    axios
        .post('/users/signup',credential)
        .then( response => {
            console.log(response);
            token.set(response.data.token)
            dispatch(authAction.registerSuccess(response.data));
        })
        .catch(error => dispatch(authAction.registerError(error)));
}

const logIn = credential => dispatch => {
    dispatch(authAction.loginRequest());

    axios
        .post('/users/login',credential)
        .then(response => {
            token.set(response.data.token)
            dispatch(authAction.loginSuccess(response.data));
        })
        .catch(error => dispatch(authAction.loginError(error)))
}

const logOut = () => dispatch => {
    dispatch(authAction.logoutRequest());

    axios
        .post('/users/logout')
        .then(response => {
            // console.log(response)
            token.unset()
            dispatch(authAction.logoutSuccess())
        })
        .catch(error => dispatch(authAction.logoutError(error)))
}

const getCurrentUser = () => (dispatch,getState) => {
   
    const  {
        auth: { token: persistedToken },
    } = getState();

    // console.log(persistedToken);
    if(!persistedToken){
        return;
    }

    token.set(persistedToken);
    dispatch(authAction.getCurrentUserRequest());

    axios
        .get('/users/current')
        .then(({data}) => {
            // console.log(data);
            dispatch(authAction.getCurrentUserSuccess(data))
        })
        .catch(error => dispatch(authAction.getCurrentUserError(error)))
}




export default {
    register,
    logIn,
    logOut,
    getCurrentUser
}