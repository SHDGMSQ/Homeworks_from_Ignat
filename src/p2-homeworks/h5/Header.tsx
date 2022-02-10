import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pathway";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.navlinks}>
            <div className={s.items}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={(Link) => Link.isActive ? s.activeLink : ''}>pre-junior</NavLink>
            </div>
            <div className={s.items}>
                <NavLink to={PATH.JUNIOR} className={(Link) => Link.isActive ? s.activeLink : ''}>junior</NavLink>
            </div>
            <div className={s.items}>
                <NavLink to={PATH.JUNIOR_PLUS} className={(Link) => Link.isActive ? s.activeLink : ''}>junior+</NavLink>
            </div>
            <div className={s.menu}> </div>
        </div>
    )
}

export default Header
