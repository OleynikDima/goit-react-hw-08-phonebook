import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from '../../components/Filter';
import Form from '../../components/Form'
import List from '../../components/List'
import contOperation from '../../redux/contact/contOperation'
import authSelector from '../../redux/auth/authSelector';
import style from './style.module.scss'

class Contacts extends Component{
    componentDidMount(){
//if User do not login -> replace to login
        if(!this.props.isAuth){
            this.props.history.replace('/login');
            return;
        }
        this.props.contactsFetch();
    }

    componentDidUpdate(){
        if(!this.props.isAuth){
            this.props.history.replace('/login');
            return;
        }

    }
    render(){
    return (
        <div className={style.wrapper}>
            <div>
            <Form/>
            </div>
            <div>
                <Filter/>
                <List/>
            </div>
        </div>
    );
   };
};


const mapStateToProps = state => ({
    isAuth:authSelector.onAuthUser(state),
})

const mapDispatchProps = {
    contactsFetch:contOperation.fetchItems,
}
  

export default connect(mapStateToProps,mapDispatchProps)(Contacts);