import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import logo from '../../images/kisspng-user-logo-information-service-design-5ba34f88e63387.4679724515374293849429.png'
import authSelector from '../../redux/auth/authSelector';
import style from './style.module.scss'
import './transition/flashUser.css'


const AuthUserBar = ({name}) => {

    return (
        <>
         <div className={style.layout}>
            <CSSTransition
            in={true}
            timeout={2000}
            appear={true}
            classNames="flash"
            unmountOnExit>
            
                    <div className={style.user}>
                        <img alt="img" className={style.user__images} src={logo} width='50'/>
                        <span className={style.user__name}> Welcom {name} </span>
        
                  </div>  
              
            </CSSTransition>
            </div>
        </>
    )
}


const mapStateToProps = state =>({
    name:authSelector.getUserName(state),
})

export default connect(mapStateToProps,null)(AuthUserBar);