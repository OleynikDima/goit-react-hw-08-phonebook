import React, { Component } from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelector'
import authOperation from '../../redux/auth/authOperation'
import style from './style.module.scss';
import UnauthUserBar from '../UnauthUserbar';
import AuthUserBar from '../AuthUserBar'


class UserMenu extends Component {
    state ={
        isShowBar:false,
    };

    toogleLogIn = () => {
        this.setState(state => ({isShowBar:!state.isShowBar}));
    };

    nullState =() => {
        this.setState(({isShowBar:false}));
    }

    render(){
        const {isShowBar} = this.state;
        const {onLogout,isAuthUser} = this.props;
        const textButtonInfo = isAuthUser ? 'Log Out':'Log In';
        const actionButtonClick = isAuthUser ? onLogout : this.toogleLogIn;
        const activeBarUser = isAuthUser ? false : isShowBar; 
    return (
            
                <div>
                    <button className={style.user_btn} type='button' onClick={actionButtonClick}> {textButtonInfo}</button>
                      <UnauthUserBar isOpen={activeBarUser}/>
                      { isAuthUser && <AuthUserBar />  }       
                </div>
        )
    }
};


const mapStateToProps = state =>({
    isAuthUser: authSelectors.onAuthUser(state)
})

const mapDispatchToProps = {
    onLogout:authOperation.logOut
}
export default connect(mapStateToProps,mapDispatchToProps)(UserMenu);