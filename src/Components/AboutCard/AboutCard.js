import React from 'react'
import style from "../AboutCard/AboutCard.module.css"
import aboutcard1 from '../Img/aboutimage1.png'
import aboutcard2 from '../Img/aboutimage2.png'
function AboutCard() {
    return (
        <div>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.aboutimg1}>
                        <img src={aboutcard1} />
                    </div>
                    <div className={style.aboutimg2}>
                        <img src={aboutcard2} />
                    </div>
                </div>

                <div className={style.text}>
                    <h1>Haqqımızda</h1>
                    <p>“Starex.az” Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq əldə etdiyi lisenziya ilə həm ölkədaxili, həm də beynəlxalq poçt bağlamalarının çatdırılmasını həyata keçirir. Şirkətimiz hal-hazırda Azərbaycan, Türkiyə və Amerikada qeydiyyatdan keçmiş və hər üç ölkədə özünəməxsus ofislərində fəaliyyət göstərir. Türkiyədən və Amerikadan sifariş üçün xidmətlərimizdən istifadə edə bilərsiniz</p>
                </div>
            </div>
        
        </div>
    )
}

export default AboutCard
