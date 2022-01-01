import React from 'react'
import style from "../Footer/Footer.module.css"
import footLogo from "../Img/footerLogo.svg"
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.display}>
                <div>
                    <div className={style.image}>
                        <img src={footLogo} />
                    </div>
                    <div className={style.icons}>
                        <FaFacebookF className={style.icon} />
                        <AiOutlineInstagram className={style.icon} />
                    </div>
                    <div className={style.text}>
                        <p>© 2020 Starex MMC | Bütün Hüquqlar Qorunur</p>
                    </div>
                </div>
                <div className={style.phone}>
                    <p><a href="tel:+8000">Telefon: *8000</a></p>
                </div>
                <div className={style.link1}>
                    <p><Link to="/about">Haqqında</Link></p>
                    <p><Link to="/services">Xidmətlər</Link></p>
                    <article>Daşıma şərtləri</article>
                </div>
                <div className={style.link2}>
                    <p><Link to="/news">Xəbərlər</Link></p>
                    <p><Link to="/tariff">Tariflər</Link></p>
                </div>
                <div className={style.link3}>
                    <p><Link to="/faq">FAQ</Link></p>
                    <p><Link to="/contact">Əlaqə</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
