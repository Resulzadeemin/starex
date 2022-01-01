import React from 'react'
import { useState } from "react"
import style from "../Tariff/Tariff.module.css"
function Tariff() {
    //country's
    const [world, setWorld] = useState("tur");
    const [country, setCountry] = useState("")
    //delivery
    const [delivery, setDelivery] = useState("adress")
    //exchange
    const [dollar, setDollar] = useState(0)
    const [azn, setAzn] = useState("")
    //weight
    const [weight, setWeight] = useState("kg")


    function inputHandler(e) { //input value
        const a = e.target.value
        setCountry(a)
    }
    function handlerCountry(e) { // country value
        let b = e.target.value;
        setWorld(b);
    }
    function handlerDelivery(e) { // delivery value
        let c = e.target.value;
        setDelivery(c);
    }
    function handlerWeight(e) {  // weight value
        let d = e.target.value
        setWeight(d)
    }

    function submitHandler(e) {
        e.preventDefault()

        if (weight === "kg") {
            if (delivery === "adress") {
                if (world === "tur") {

                    if (country <= 2) {
                        setDollar(country * 6)
                    }
                    else if (country <= 5) {
                        setDollar(country * 5.5)
                    }
                    else {
                        setDollar(country * 5)
                    }
                }

                else if (world === "usa") {

                    if (country != null) {
                        setDollar((country * 8.4).toFixed(1))
                    }
                }

                else if (world === "cin") {

                    if (country != null) {
                        setDollar(country * 10)
                    }
                }
            }
        }

        if (weight === "kg") {
            if (delivery === "filial") {
                if (world === "tur") {

                    if (country <= 2) {
                        setDollar(country * 5.5)
                    }
                    else if (country <= 5) {
                        setDollar(country * 5)
                    }
                    else {
                        setDollar(country * 4.5)
                    }
                }

                else if (world === "usa") {

                    if (country != null) {
                        setDollar((country * 7.9).toFixed(2))
                    }
                }

                else if (world === "cin") {

                    if (country != null) {
                        setDollar(country * 9.5)
                    }
                }
            }
        }
    }


    return (
        <div className={style.tariff}>
            <div className={style.country}>
                <h1>Ölkəni seçin</h1>
                <select defaultValue="tur" onChange={handlerCountry}>
                    <option value="tur">TÜRKİYƏ</option>
                    <option value="usa">ABŞ</option>
                    <option value="cin">Çin</option>
                </select>
            </div>

            <div className={style.delivery}>
                <h1>Çatdırılma növü</h1>
                <select defaultValue="adress" onChange={handlerDelivery}>
                    <option value="adress">Adresə çatdırılma,</option>
                    <option value="filial">Filiala catdirilma</option>
                </select>
            </div>

            <div className={style.weight}>
                <h1>Çəki</h1>
                <input type="number" placeholder="0" onChange={inputHandler} />
                <select defaultValue="kg" onChange={handlerWeight}>
                    <option value="kg">kg</option>
                    <option disabled value="gr">qr</option>
                </select>
            </div>

            <div className={style.btn}>
                <h1>Qiyməti</h1>
                <div className={style.price}>
                    <button type="submit" onClick={submitHandler}>Çatdırılma qiyməti</button>
                    <div className={style.number}>
                        <span>{dollar}$</span>
                        <span>({dollar * 1.7}{azn}₼)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tariff;
