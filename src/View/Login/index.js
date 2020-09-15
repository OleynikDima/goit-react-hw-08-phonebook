import React, { Component } from 'react';
import style from './style.module.scss'
import { CSSTransition } from 'react-transition-group';
import './transition/flash.css'
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';



class Login extends Component{
    state={
        email:'',
        password:'',
    }
handleChangeEmail = (e) => {
    this.setState({
        email:e.target.value
    })
}
handleChangePassword = (e) => {
    this.setState({
        password:e.target.value
    })
}
handleSubmit = e => {
    e.preventDefault();
 
    this.props.onLogin({...this.state})

    this.setState({email:'',password:''})
}
    render(){
        const {email,password} = this.state;
    return (
        <CSSTransition 
         in={true}
         timeout={500}
         appear={true}
         classNames="flashIn"
         unmountOnExit
         >
        <section className={style.section}>
            <form className={style.form} onSubmit={this.handleSubmit}>
                <label>
                    <input 
                       typy="text"
                       className={style.form_input} 
                       valur={email} 
                       placeholder="Email"
                       onChange={this.handleChangeEmail}/>    
                </label>
                <label>
                    <input 
                       typy="text"
                       className={style.form_input} 
                       valur={password} 
                       placeholder="Password"
                       onChange={this.handleChangePassword}/>    
                </label>

                <button className={style.form_btn} type="submit"> Login </button>
            </form>   
        </section>
        </CSSTransition>
    );
  }
};

const mapDispatchToProps = {
    onLogin:authOperation.logIn
}

export default connect(null,mapDispatchToProps)(Login);