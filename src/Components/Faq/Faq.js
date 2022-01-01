import React from 'react'
import './Faq.css'
import { useState } from 'react'
import Order from "../FaqComponents/Order"
import Declaration from '../FaqComponents/Declaration'
import Balance from '../FaqComponents/Balance'
import Delivery from '../FaqComponents/Delivery'
import Office from '../FaqComponents/Office'
import Customs from '../FaqComponents/Customs'
import Onlayn from '../FaqComponents/Onlayn'
import Giftcard from '../FaqComponents/Giftcard'
import Cargo from '../FaqComponents/Cargo'
function Faq() {
    const [btn, setBtn] = useState(<Order />)
    return (
        <div className='top'>
            <div className='questiontitle'>
                <h1>Tez-Tez Verilən Suallar</h1>
            </div>
            <div className="question">
                <div>
                    <div className="questiontext">
                        <h1 onClick={() => setBtn(<Order />)} >Sifariş haqqında</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Declaration />)} >Bəyannamə</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Balance />)} >Balans</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Delivery />)} >Çatdırılma</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Office />)} >Ofis/Anbar</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Customs />)} >Gömrük</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Onlayn />)} >Onlayn müraciət</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Giftcard />)} >Hədiyyə kartı</h1>
                    </div>
                    <div className="questiontext" >
                        <h1 onClick={() => setBtn(<Cargo />)} >Kuryer</h1>
                    </div>
                </div>
                <div>
                    {btn}
                </div>
            </div>
        </div>
    )
}

export default Faq
