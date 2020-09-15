import React, { Component } from 'react';
import { connect } from 'react-redux';
import constOperation from '../../redux/contact/contOperation';
import style from './style.module.scss'


class Form extends Component {
    state ={
        name:'',
        number:'',
    }

    handleChangeText = (e) => {
        this.setState({name:e.target.value})
    }    
    handleChangeNumber = (e) => {
        this.setState({number:e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        const {name, number } = this.state

        this.props.onAddObj({name,number})

        this.setState({name:'',number:''})
    }

render(){
    const {name,number} = this.state
    return (
        <div className={style.container}>
        <form  className={style.form} onSubmit={this.handleSubmit} >
        <label className={style.form_label}>Name
            <input 
            className={style.form_input}
            type="input" 
            value={name}
            onChange={this.handleChangeText}
            // placeholder="please write name"
            />
         </label>

         <label className={style.form_label}> Number
            <input 
            className={style.form_input}
            type="input" 
            value={number}
            onChange={this.handleChangeNumber}
            // placeholder="number phone"
            />
         </label>


         <button 
            className={style.form_button} 
            type="submit"
            disabled={!name || !number}
            >
                { this.props.isLoadingBtn === true ? `Loading ` : `Add contact`
                } 
         </button>
    </form>
    </div>
        
    )
  }
}

const mapDispatchToProps = {
    onAddObj:constOperation.addTask
}

export default connect(null,mapDispatchToProps)(Form)