import React from 'react'
import Tariff from '../Tariff/Tariff'
import style from "../Section1/Section1.module.css"
function Section1() {
    return (
        <div>
            <div className={style.section1}>
                <div className={style.head}>
                    <h1>starex</h1>
                </div>
                <div className={style.text}>
                    <p>TÜRKİYƏ,AMERİKA,ÇİNDƏN</p>
                    <p>Alış veriş etmək indi daha asan oldu</p>
                </div>
            </div>
            <div className={style.tarif}>
                <Tariff />
            </div>
        </div>
    )
}

export default Section1
