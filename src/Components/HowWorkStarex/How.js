import React from 'react'
import style from '../HowWorkStarex/How.module.css'
import { BsPlusLg } from 'react-icons/bs';
import { HiCheck } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiOutlineRight } from 'react-icons/ai';
function How() {
    return (
        <div className={style.bottom}>
            <div className={style.title}>
                <h1>Starex Necə İşləyir ?</h1>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <h2><BsPlusLg /></h2>
                    <h1>Qeydiyyatdan keçin</h1>
                    <p>Türkiyə və Amerikadan məhsul sifariş vermək üçün ilk öncə saytımızda qeydiyyatdan keçin.</p>
                </div>

                <div className={style.card}>
                    <h3><AiOutlineRight /></h3>
                </div>

                <div className={style.card}>
                    <h2><HiCheck /></h2>
                    <h1>Sifariş et xidmətindən istifadə edin</h1>
                    <p>Türkiyə və Amerikanın alış-veriş saytlarından bəyəndiyiniz məhsulun linkini “Sifariş et“ xidməti ilə bizə göndərin</p>
                </div>

                <div className={style.card}>
                    <h3><AiOutlineRight /></h3>
                </div>

                <div className={style.card}>
                    <h2><FiArrowUpRight /></h2>
                    <h1>Evinizə qədər çatdıraq</h1>
                    <p>Sifariş etdiyiniz məhsulu ofisimizdən təhvil alın və ya evinizə qədər çatdıraq.</p>
                </div>
            </div>
        </div>
    )
}

export default How
