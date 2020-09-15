import React from 'react';
import { connect } from 'react-redux';
import {Route,  Redirect } from 'react-router-dom'
import authSelector from '../redux/auth/authSelector';

const PublickRoute  = ({
    component:Component, 
    isAuthUser,
    restricted,
     ...routeProps}) => {
      return <Route 
       {...routeProps}
        render = { props => 
         isAuthUser && restricted ? (<Redirect to="/contacts"/>) : (<Component {...props}/>)
        }
    />
};

const mapStateToProps = state => ({
    isAuthUser:authSelector.onAuthUser(state),
});

export default connect(mapStateToProps,null) (PublickRoute);
