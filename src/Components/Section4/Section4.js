import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import style from "../Section4/Section4.module.css"
function Section4() {
    return (
        <div className={style.section4}>
            <div className={style.text}>
                <h1>Xidmətlərimiz</h1>
            </div>
            <ServiceCard />
        </div>
    )
}

export default Section4
