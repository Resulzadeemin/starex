import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Onlayn() {
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
const data = [
    {
        question: 'Araşdırılır statusunda olan sorğunun cavablandırılma müddəti nə qədərdir?',
        answer:
            'Araşdırma müddəti əsasən 15 iş gününü əhatə edir. Satıcı firmalara göndərdiyimiz müraciətlər bəzən çox gec cavablandığı üçün bəzən bu müddət bir qədər uzana bilir.  '
    },
    {
        question: 'Araşdırma zamanı mağaza ilə danışıqlar neçə müddət ərzində nəticələnir?',
        answer:
            'Müştərilərimiz bizə müraciət etdiyi andan etibarən satıcı mağaza ilə əlaqə saxlayıb işləm başladırıq. Satıcı mağaza tərəfindən ilkin mərhələdə 7 iş günü ərzində məlumat veriləcəyi bildirilir. Sorğuya əsasən bu müddət bir qədər uzana bilir.'
    },
    {
        question: 'Saytınızda sorğu yaratmışam. Nə qədər müddətə cavab alacam?',
        answer:
            '“Onlayn müraciət et” bölməsindən qəbul edilən bütün sorğuları 2 iş günü ərzində cavablayırıq. Sorğunuzu cavabladıqda sizə mail vasitəsilə bildiriş göndərilir. Cavabı “Müraciətlər” bölməsindən izləyə bilirsiniz.'
    }
]
export default Onlayn
