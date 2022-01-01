import React from 'react'
import style from "../About/About.module.css"
import { IoIosCheckmarkCircle } from "react-icons/io";
import AboutCard from '../AboutCard/AboutCard';
function About() {
    return (
        <div className={style.about} >
            <AboutCard />
            <div className={style.icons}>
                <div className={style.icon}>
                    <div className={style.value} ><h1>Dəyərlilərimiz</h1></div>
                    <ul>
                        <li>
                            <div className={style.circle}><IoIosCheckmarkCircle /></div>
                            <div className={style.text1} ><h1>Sadə işləyiş şəkli</h1></div>
                        </li>
                        <li>
                            <div className={style.circle}><IoIosCheckmarkCircle /></div>
                            <div className={style.text1} ><h1>Müştəriyə yönəlik</h1></div>
                        </li>
                        <li>
                            <div className={style.circle}><IoIosCheckmarkCircle /></div>
                            <div className={style.text1} ><h1>Davamlı inkişaf və öyrənmək</h1></div>
                        </li>
                    </ul>
                </div>

                <div id={style.icon} className={style.icon}>
                    <div className={style.value} ><h1>Vizyonumuz</h1></div>
                    <ul>
                        <li>
                            <div className={style.circle}><IoIosCheckmarkCircle /></div>
                            <div className={style.text1} ><h1>Sektorda ən mötəbər, ən dəqiq şirkət olmaq</h1></div>
                        </li>
                        <li>
                            <div className={style.circle}><IoIosCheckmarkCircle /></div>
                            <div className={style.text1} ><h1>Eyni gündə çatdırmaq xidmətini həyata keçirmək</h1></div>
                        </li>
                    </ul>
                </div>

                <div id={style.icon1} className={style.icon}>
                    <div className={style.value} ><h1>Missiyonumuz</h1></div>
                    <ul>
                        <li>
                            <div className={style.circle}><IoIosCheckmarkCircle /></div>
                            <div className={style.text1} ><h1>Keyfiyyətli xidmət və müştərilərimizin maksimum razılığını təmin etmək</h1></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
