import React, { Component } from 'react'
import style from './style.module.scss'
import {connect} from 'react-redux';
import authOperation from '../../redux/auth/authOperation';

class Register extends Component {
    state={
        name:'',
        email:'',
        password:'',
    }

    handleChangeLohin = e => {
        this.setState({
            name:e.target.value
        })
    }

    handleChangeEmail = e => {
        this.setState({
            email:e.target.value
        })
    }

    handleChangePassword = e => {
        this.setState({
            password:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name,email,password} = this.state;
        this.props.onRegister({...this.state})

         console.log('name:',name ,"email:",email,'password:',password)
        this.setState({name:'',email:'',password:''})
    }
    render(){
        const {name,email,password} = this.state;
      return (
        <section className={style.section}>
            <form className={style.form} onSubmit={this.handleSubmit}>
                <label className={style.form_label}>
                    Name
                <input 
                       typy="text"
                       className={style.form_input} 
                       value={name} 
                       placeholder="Login"
                       onChange={this.handleChangeLohin}
                       />    
                </label>
                <label>
                    Email adress
                    <input 
                       typy="text"
                       className={style.form_input} 
                       value={email} 
                       placeholder="Email"
                       onChange={this.handleChangeEmail}
                       />    
                </label>
                <label>
                    Password
                    <input 
                       typy="text"
                       className={style.form_input} 
                       value={password} 
                       placeholder="Password"
                       onChange={this.handleChangePassword}
                       />    
                </label>

                <button className={style.form_btn} type="submit"> Register </button>
            </form>  
        </section>
    )
    }
}

const mapDispatchToProps = {
    onRegister:authOperation.register
}


export default connect(null,mapDispatchToProps)(Register);