import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from "../Header/Header.module.css"
import { NavLink } from "react-router-dom"
import { BsTelephoneFill } from "react-icons/bs";
function Header() {
    return (
        <div>
            <div className={style.bg}>
                <div className={style.header}>
                    <div className={style.head}>
                        <BsTelephoneFill className={style.icon}/>
                        <h1>*8000 Müştəri xidmətləri</h1>
                    </div>
                    <div className={style.form}>
                        <NavLink to="/registration">QEYDİYYAT</NavLink>
                        <NavLink to="/login">DAXİL OL</NavLink>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Header
