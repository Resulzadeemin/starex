import React from 'react'
import { useState } from "react"
import Delivery from '../Delivery/Delivery'
import Ware from '../Warehouse/Ware'
import style from "../Contact/Contact.module.css"
function Contact() {
    const [type, setType] = useState(<Ware />)
    return (
        <div className={style.contact}>
            <button type="btn1" onClick={() => setType(<Ware />)}>ANBARLAR</button>
            <button type="btn2" onClick={() => setType(<Delivery />)}>FİLİALLAR/TƏSLİMAT NÖQTƏLƏRİ</button>
            <article>{type}</article>
        </div>
    )
}

export default Contact
