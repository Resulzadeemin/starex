import React from 'react'
import { useState } from "react"
import style from "../Warehouse/Ware.module.css"
import { MdLocationOn } from "react-icons/md";
function Ware() {
    const city = [
        {
            name: "Türkiyə",
            id: 1,
            total: "Türkiyə; B.e.-Ş. 10:00-19:00 (GMT 3)"
        },
        {
            name: "ABŞ",
            id: 2,
            total: "Amerika; B.e.-Ş. 09:00-18:00 (GMT 5)"
        },
        {
            name: "Çin",
            id: 3,
            total: "Çin; B.e.-Ş. 09:00-18:00 (GMT 8)"
        }
    ];
    const [country, setCountry] = useState(["Türkiyə; B.e.-Ş. 10:00-19:00 (GMT 3)"]);
    return (
        <div className={style.select}>
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                {
                    city.map(
                        (e) => {
                            return <option
                                key={e.id}
                                value={e.total}>
                                {e.name}
                            </option>
                        }
                    )
                }
            </select>
            <div className={style.country}>
                <p><MdLocationOn className={style.icon} />{country}</p>
            </div>
        </div>
    )
}

export default Ware

