import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import style from "../News/News.module.css"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { LoadingOutlined } from '@ant-design/icons';
function News() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(3)
    const [spinLoading, setSpinLoading] = useState(false)
    useEffect(
        () => {
            axios.get("https://my-json-server.typicode.com/Resulzadeemin/starexnews/starexnews")
                .then((response) => { setNews(response.data); setLoading(false) })
                .catch(error => error)
        },
        []
    )
    if (loading) {
        return <p className={style.loading}><Spin /></p>
    }
    const load = () => {
        setSpinLoading(true)
        setTimeout(() => {
            setLimit(limit + 3); setSpinLoading(false)
        }, 1000);
    }
    return (
        <div>
            <div className={style.news}>
                {
                    news.slice(0, limit).map(
                        (e) => {
                            return <div key={e.id} >
                                <Link to={`new/${e.id}`}>
                                    <div className={style.head}>
                                        <img src={e.url} />
                                    </div>
                                    <div className={style.text}>
                                        <h1>{e.title}</h1>
                                        <time><AiOutlineCalendar className={style.icon2} />{e.date}</time>
                                        <p>{e.titletext}...</p>
                                        <BsArrowRight className={style.icon} />
                                    </div>
                                </Link>
                            </div>
                        }
                    )
                }
            </div>
            <div className={style.btn}>
                {
                    limit < news?.length &&
                    <button onClick={load}>
                        {spinLoading && <span>Yüklənir..<LoadingOutlined className={style.icon3} /></span>}
                        {!spinLoading && <span>Daha Çox..</span>}
                    </button>
                }
            </div>
        </div>
    )
}

export default News
