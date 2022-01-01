import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Giftcard() {
    const [selected, setSelected] = useState(null)
    function toggle(i) {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className="wrapper">
        <div className="accordion">
            {data.map((item, i) =>
                <div className="item">
                    <div className="title" onClick={() => toggle(i)} >
                        <h2>{item.question}</h2>
                        <span>{selected === i ? <h2><IoIosArrowUp /></h2> : <h2><IoIosArrowDown /></h2>}</span>
                    </div>
                    <div className={selected === i ? `content show` : `content`} >
                        <p>{item.answer}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
    )
}
const data =[
    {
        question: 'Hədiyyə kartlarından istifadə qaydası necədir?',
        answer:
            'Hədiyyə kartlarımız vasitəsilə siz Starex TRY balansınızı artırıb, "Həvalə et" xidmətimizdən istifadə etməklə Türkiyənin məşhur saytlarından istədiyiniz məhsulu sifariş edə bilərsiniz. Hədiyyə kartlarımızdan istifadə etmək üçün; 1. Saytımızda "Qeydiyyat" bölməsinə daxil olaraq qeydiyyatdan keçin 2. Hədiyyə kartınızdakı məbləği balansınıza yükləmək üçün "Balans" bölməsinə daxil olun. 3. "Hədiyyə kartı" xanasına kartınızın üzərindəki pozduğunuz 16 rəqəmli şifrəni qeyd edin.  4. Şifrəni qeyd etdikdən sonra "Təsdiqlə" düyməsini sıxın. Bu zaman hədiyyə kartınızdakı məbləğ balansınızda görünəcək. 5. "Sifariş et" düyməsini sıxaraq sifarişlərinizi göndərə bilərsiniz.  - Hədiyyə kartının istifadə müddəti kartınızın arxasında qeyd edilmişdir. Bu müddətədək Hədiyyə kartınızdakı məbləği Starex balansınıza əlavə etməyiniz lazımdır.'
    }
]
export default Giftcard
