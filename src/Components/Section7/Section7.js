import React from 'react'
import News from '../News/News'
import style from "../Section7/Section7.module.css"
function Section7() {
    return (
        <div>
            <div className={style.section7}>
                <h1>Ən Son Yeniliklərimiz</h1>
            </div>
            <News />
        </div>
    )
}

export default Section7
