import React from 'react'
import style from "../Slider/Slider.module.css"
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import newyork from "../Img/america.jpg"
import honkong from "../Img/china.jpg"
import istanbul from "../Img/turkey.jpg"
function Slider() {
    const contentStyle = {
        height: '500px',
        width:"1200px",
        margin:"0 auto",
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className={style.slider}>
            <Carousel autoplay>
                <div className={style.img}>
                    <h3 style={contentStyle}><img src={newyork}/></h3>
                </div>
                <div className={style.img}>
                    <h3 style={contentStyle}><img src={honkong}/></h3>
                </div>
                <div className={style.img}>
                    <h3 style={contentStyle}><img src={istanbul}/></h3>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
