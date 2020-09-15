import React from 'react';
import {NavLink} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import style from './style.module.scss';
import dropTransition from './transition/dropList.module.scss';
import Login from '../../View/Login'



const UnauthUserBar =({isOpen}) => {
    return (
        <div>
            <CSSTransition
            in={isOpen}
            timeout={250}
            classNames={dropTransition}
            unmountOnExit>
                 <ul className={style.user_bar}>
                     <li>
                        <Login  className={dropTransition} />
                    </li>

                    <li  className={style.user_bar__register}>
                        <NavLink
                        className={style.user_bar__link}
                        exact 
                        to='/register'>
                                Register
                        </NavLink>
                    </li> 
                 </ul>
            </CSSTransition>
        </div>
        )
}

export default  UnauthUserBar;