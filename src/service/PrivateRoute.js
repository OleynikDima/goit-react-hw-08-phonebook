import React from 'react';
import { connect } from 'react-redux';
import {Route,  Redirect } from 'react-router-dom'
import authSelector from '../redux/auth/authSelector';

const PrivateRoute = ({component:Component, isAuthUser, ...routeProps}) => {
      return <Route 
       {...routeProps}
        render = { props => 
          isAuthUser  ? <Component {...props}/> : <Redirect to="/login"/>
        }
    />
};

const mapStateToProps = state => ({
    isAuthUser:authSelector.onAuthUser(state)
});

export default connect(mapStateToProps,null) (PrivateRoute);
