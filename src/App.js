import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import routes from './service/routes';

import Header from './components/Header'
import './App.css';


import { connect } from 'react-redux';
import authOperation from './redux/auth/authOperation';
import PrivateRroute from './service/PrivateRoute';
import PublicRoute from './service/PublickRoute'

class App extends Component {
  componentDidMount(){
    this.props.onGetCurrentUser();
  }
  render(){
  return (  
   <>
    <BrowserRouter>
      <Header/>
      {/* <hr/> */}
       <Suspense fallback={<h1> </h1>}>
         <Switch>
        {
          routes.map(route => {
          return route.private 
       ? <PrivateRroute key={route.label} {...route} /> 
       : <PublicRoute key={route.label} {...route} restricted={route.restricted} /> 
     })
     }
           </Switch>
         </Suspense>
    </BrowserRouter>
    </>
  );
 }
}

const mapDispatchProps = {
  onGetCurrentUser:authOperation.getCurrentUser
}

export default connect(null,mapDispatchProps)(App);
