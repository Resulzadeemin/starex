import React from 'react'
import style from "../Advantage/Advan.module.css"
import { BsSpeedometer } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaMedal } from 'react-icons/fa';
import { GiLampreyMouth } from 'react-icons/gi';
function Advan() {
    return (
        <div className={style.advan}>
            <div className={style.title}>
                <h1>Əsas Üstünlüklərimiz</h1>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.card2}>
                        <BsSpeedometer />
                    </div>
                    <h1>Sürətli və təhlükəsiz çatdırılma</h1>
                </div>

                <div className={style.card}>
                    <div className={style.card2}>
                        <GiTakeMyMoney />
                    </div>
                    <h1>Pula qənaət</h1>
                </div>

                <div className={style.card}>
                    <div className={style.card2}>
                        <FaMedal />
                    </div>
                    <h1>Sübut olunmuş təcrübə</h1>
                </div>

                <div className={style.card}>
                    <div className={style.card2}>
                        <GiLampreyMouth />
                    </div>
                    <h1>İnnovativlik</h1>
                </div>
            </div>
        </div>
    )
}

export default Advan
