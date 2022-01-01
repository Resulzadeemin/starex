import React from 'react'
import style from "../ServiceCard/ServiceCard.module.css"
import turk1 from '../Img/turkey1.svg'
import amerika1 from '../Img/amerika1.svg'
import china from '../Img/china.svg'
import servicesicon1 from '../Img/servicesicon1.svg'
import servicesicon2 from '../Img/servicesicon2.svg'
function ServiceCard() {
    return (
        <div>
            <div className={style.icons}>
                <div className={style.icon}>
                    <img  src={turk1} />
                    <h1>Türkiyədən çatdırılma</h1>
                </div>

                <div className={style.icon}>
                    <img src={amerika1} />
                    <h1>Amerikadan çatdırılma</h1>
                </div>

                <div className={style.icon}>
                    <img src={china} />
                    <h1>Çindən çatdırılma</h1>
                </div>

                <div className={style.icon}>
                    <img src={turk1} />
                    <h1>Sifariş et (Türkiyədən)</h1>
                </div>
            </div>

            <div className={style.cards}>
                <div className={style.card}>
                    <img src={servicesicon1} />
                    <h1>Geri qaytarma</h1>
                </div>

                <div id={style.card1} className={style.card}>
                    <img src={servicesicon2} />
                    <h1>Bağlamaların Çatdırılma Növü</h1>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard
