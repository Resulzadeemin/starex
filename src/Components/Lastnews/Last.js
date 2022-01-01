import { useEffect, useState } from 'react'
import style from "../Lastnews/Last.module.css"
import axios from "axios"
import { useParams } from 'react-router-dom'
import { AiOutlineCalendar } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { Link } from "react-router-dom"
function Last() {
    const [news, setNews] = useState([]);
    const [link, setLink] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Resulzadeemin/starexnews/starexnews/${id}`)
            .then(response => setNews(response.data))
            .catch((err) => { console.log(err); });
    },
        []
    );
    useEffect(
        () => {
            axios.get("https://my-json-server.typicode.com/Resulzadeemin/starexnews/starexnews/")
                .then(res => setLink(res.data))
                .catch((error) => { console.log(error); });
        },
        []
    )
    return (
        <div>
            {
                news &&
                <div className={style.last}>
                    <div className={style.change}>
                        <img src={news.url} />
                        <h1>{news.name}</h1>
                        <div className={style.timeicon}>
                            <time><AiOutlineCalendar className={style.icon2} />{news.date}</time>
                            <div>
                                <Link to="/"><FaFacebookF className={style.icon} /></Link>
                                <Link to="/"><AiOutlineInstagram className={style.icon} /></Link>
                                <Link to="/"><AiFillLinkedin className={style.icon} /></Link>
                                <Link to="/"><IoMdShareAlt className={style.icon} /></Link>
                            </div>
                        </div>
                        <p>{news.text}</p>
                    </div>
                    <div className={style.lastnews}>
                        <h1>Son Xəbərlər</h1>
                
                        {
                            link.map(
                                (e) => {
                                    return <Link key={e.id} to="/news">
                                        <div className={style.title}>
                                            <p>{e.title}</p>
                                            <hr className={style.hr} />
                                            <time>{e.date}</time>
                                        </div>
                                    </Link>
                                }
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Last