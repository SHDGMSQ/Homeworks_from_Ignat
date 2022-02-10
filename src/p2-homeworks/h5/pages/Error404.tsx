import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.notFound}>
            <div className={s.item}>404</div>
            <div className={s.item}>Page not found!</div>
            <div className={s.item}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
