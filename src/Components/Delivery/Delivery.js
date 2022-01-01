import React from 'react'
import style from "../Delivery/Delivery.module.css"
import { useState } from "react"
import { MdLocationOn } from "react-icons/md";
function Delivery() {
    const [region, setRegion] = useState(["Atatürk prospekti, 4A (Gənclik metrosunun yanı) ; *8000 ; B.e.- Ş. 10:00-21:00"])
    const reg = [
        {
            name: "Baki",
            id: 1,
            total: "Atatürk prospekti, 4A (Gənclik metrosunun yanı) ; *8000 ; B.e.- Ş. 10:00-21:00 "
        },
        {
            name: "Gence",
            id: 2,
            total: "Nəriman Nərimanov küçəsi 298F (Köhnə Yevlax avtovağzalı ilə üzbəüz) ; *8000 ; B.e.- Ş. 10:00-19:00"
        },
        {
            name: "Mingecevir",
            id: 3,
            total: "Səməd Vurğun 20, “Azərpoçt” MMC-nin mərkəzi filialı ; B.e.- C. 09:00-18:00, Ş. 09:00-13:00"
        },
        {
            name: "Sumqayit",
            id: 4,
            total: "Bakı küçəsi 107 (Aviakassanın yanı) ; *8000 ; B.e.- Ş. 10:00-21:00"
        }
    ]
    // const reg2 = [
    //     {
    //         total:"Baki-Genclik"
    //     }
    // ]
    return (
        <div className={style.delivery}>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
                {
                    reg.map(
                        (e) => { return <option value={e.total}>{e.name}</option> }
                    )
                }
            </select>
            <select className={style.delivery}>
                {
                    reg.map(
                        (e) => { return <option>{e.name}</option> }
                    )
                }
            </select>
            <div className={style.city}>
                <p><MdLocationOn className={style.icon} />{region}</p>
            </div>
        </div>
    )
}

export default Delivery
