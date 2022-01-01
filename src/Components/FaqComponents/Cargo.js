import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Cargo() {
    const [selected, setSelected] = useState(null)
    function toggle(i) {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div>
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
        </div>
    )
}
const data = [
    {
        question: 'Kuryer sifarişləri neçə gün ərzində çatdırılır?',
        answer:
            'Saat 08:00-dan sonra yaradılan bütün kuryer sifarişləri növbəti iş günü (maksimum 2 iş günü ərzində) çatdırılır.  '
    },
    {
        question: 'Çəki ödənişini kuryerə nağd şəkildə ödəmək mümkündürmü?',
        answer:
            'Bəli, mümkündür. Çatdırılma və kuryer ödənişlərini həm nağd şəkildə, həm də usd balansınızı artıraraq onlayn şəkildə ödəyə bilərsiniz.'
    },
    {
        question: 'Kuryer ödənişi hər bağlamaya görə hesablanır?',
        answer:
            'Xeyr, ödəniş bağlama sayına görə dəyişmir. Ünvanınıza gələn bir neçə bağlama üçün yalnız bir ödəniş edirsiniz. Ödəniş tarifləri çatdırılma ediləcək əraziyə görə dəyişir. Kuryer tarifləri: http://starex.link/kuryer'
    },
    {
        question: 'Rayonlara çatdırılma mümkündürmü?',
        answer:
           'Bəli mümkündür. Rayonlara çatdırılma Azərpoçt şirkəti ilə əməkdaşlıq çərçivəsində həyata keçirilir. Bağlamalarınızı Azərpoçt şirkətinə həftədə 6 dəfə olmaqla təhvil veririk. Bağlamalarınız poçta təhvil verildikdən sonra 2-3 iş günü ərzində qeyd etdiyiniz rayondakı Azərpoçt filialına çatdırılır.  '
    }
]
export default Cargo
