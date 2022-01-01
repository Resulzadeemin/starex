import React from 'react'
import style from "../Shops/Shops.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
function Shops() {
    const [shopping, setShopping] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [filteredCat, setFilteredCat] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {                                         //shoppingGetApi
        axios.get("https://my-json-server.typicode.com/Resulzadeemin/shoppinglogo/shoppinglogo")
            .then((res) => { setShopping(res.data); setLoading(false); setFiltered(res.data); setFilteredCat(res.data) })
            .catch((err) => { console.log(err); });
    },
        []
    );

    if (loading) {                                            //shoppingLoading
        return <p className={style.loading}><Spin /></p>
    }

    const { Search } = Input;                                 //shoppingSearchInput

    function filterResult(cat) {                              //shoppingFilterButton
        const result = shopping.filter(
            (a) => { return a.category === cat }
        )
        setFiltered(result)
        setFilteredCat(result)
    }
    const handleSearch = (e) => {

        let value = e.target.value;
        if (value.length > 0) {
            let data = filtered.filter(e => e.name.toLowerCase().includes(value))
            setFiltered(data);
        } else {
            setFiltered(filteredCat)
        }
    }

    return (
        <div>
            <div className={style.bg}>
                <div className={style.input}>
                    <Space direction="vertical">
                        <Search enterButton
                            type="text"
                            placeholder="axtarış"
                            onChange={handleSearch} />
                    </Space>
                </div>
                <div className={style.filterbtn}>
                    <button onClick={() => filterResult("turkey")}>Türkiyə</button>
                    <button onClick={() => filterResult("america")}>Amerika</button>
                    <button onClick={() => filterResult("china")}>Çin</button>
                    <button type='all' onClick={() => setFiltered(shopping)}>Hamısı</button>
                </div>
                <div className={style.shop}>
                    {
                        filtered.map(
                            (e) => {
                                return <div
                                    key={e.id}
                                    className={style.card}>
                                    <a target="_blank" href={e.link}>
                                        <img src={e.url} />
                                        <h1>{e.name}</h1>
                                    </a>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Shops