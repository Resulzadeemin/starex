import React from 'react'
import style from "../Login/Login.module.css"
import { Link } from "react-router-dom"
function Login() {
    return (
        <div className={style.login}>
            <div className={style.title}>
                <h1>Daxil ol</h1>
            </div>
            <div className={style.input1}>
                <input type="email" placeholder='email daxil edin..' />
            </div>
            <div className={style.input2}>
                <input type="password" placeholder='parol daxil edin..' />
            </div>
            <div className={style.display}>
                <div className={style.check}>
                    <input type="checkbox" />
                    <span>Yadda saxla</span>
                </div>
                <div className={style.text}>
                    <p><Link>Şifrəni unutmusunuz?</Link></p>
                </div>
            </div>
            <div className={style.button}>
                <button>Daxil ol</button>
            </div>
            <div className={style.article}>
                <p>Hesabınız yoxdur ? <Link style={{ textDecoration: "underline" }} to="/registration">Yeni hesab</Link> yaradın.</p>
            </div>
        </div>
    )
}

export default Login
