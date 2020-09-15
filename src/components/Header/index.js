import React from 'react';
import {NavLink} from 'react-router-dom';
import UserMenu from '../UserMenu';
import style from './style.module.scss';


const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style['header-nav']}>
                <ul className={style.header_list}>
                    <li className={style.header_list__item}> 
                    <NavLink
                            exact 
                            className={style['header_list__link']}
                            to='/'>
                            Home
                    </NavLink>
                    </li>
                    {/* <li className={style.header_list__item}>
                    <NavLink
                            exact 
                            className={style['header_list__link']}
                            to='/news'>
                            News
                    </NavLink>
                    </li> */}
                    <li className={style.header_list__item}>
                    <NavLink
                            exact 
                            className={style['header_list__link']}
                            to='/contacts'>
                            Contacts
                    </NavLink>
                    </li>
                </ul>
                <UserMenu/>  
                </nav>
        </header>
    )
}

export default Header;