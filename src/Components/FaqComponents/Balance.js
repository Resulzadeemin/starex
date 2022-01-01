import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
function Balance() {
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
        question: 'TL və USD balansı nə üçündür?',
        answer:
            'TRY balansı "Həvalə et" xidmətimizlə sifariş edilməsi üçün saytımıza yerləşdirdiyiniz linklərin ödənişinin edilməsi üçündür. USD balansı isə ölkələrarası çatdırılma və kuryer sifarişlərinizin ödənişinin edilməsi üçündür. Bu ödənişlərin bağlamanı təhvil aldığınız zaman nağd şəkildə də edilməsi mümkündür. Ölkələrarası çatdırılma və kuryer ödənişlərinin TRY balansı ilə ödənilməsi mümkün deyildir. Balanslararası dəyişiklik edilmir, məbləği USD balansından TL balansına və ya əksinə göndərmək mümkün deyil. Ancaq, balansınıza kart vasitəsilə yüklədiyiniz məbləği bank kartınıza geri ala, E-manat terminalı vasitəsilə və ya ofisimizdə nağd şəkildə balans artımı etdiyiniz təqdirdə isə ofisimizdən vəsiqənizin əsli ilə nağdlaşdıra bilərsiniz.'
    },
    {
        question: 'Balansımdakı vəsaiti necə əldə edə bilərəm?',
        answer:
            'Balansınıza kart vasitəsilə yüklədiyiniz məbləği bank kartınıza geri ala bilərsiniz. Bunun üçün saytımızda “Onlayn müraciət et” bölməsinə daxil olursunuz və “Balansla bağlı” başlığı altında kartınıza geri qaytarılmalı olan məbləği və kartınızın son 4 rəqəmini qeyd edirsiniz. Biz müraciətinizi dərhal müvafiq banka yönləndiririk. Məbləğ bank tərəfindən 5-7 iş günü ərzində ödəniş etdiyiniz karta geri qaytarılır. E-manat terminalı vasitəsilə və ya ofisimizdə nağd şəkildə balans artımı etdiyiniz təqdirdə isə məbləği ofisimizdən vəsiqənizin əsli ilə nağdlaşdıra bilərsiniz.  '
    },
    {
        question: 'Starex balansımı hansı vasitələrlə artıra bilərəm?',
        answer:
            'Starex balansınızı həm nağd, həm də onlayn şəkildə artıra bilərsiniz. Saytımız və mobil tətbiqlərimizə daxil olaraq onlayn ödənişlə balans artırmaq mümkündür. E-manat terminalları vasitəsilə USD balansınızı, ofislərimizə yaxınlaşaraq isə həm TRY, həm də USD balansınızı nağd şəkildə artıra bilərsiniz.'
    },
    {
        question: 'E-manatla balansı necə artıra bilərəm?',
        answer:
            'E-manat terminalları vasitəsilə balansınızı artırmaq üçün ekranda “digər” bölməsinə daxil olaraq “Starex”-i seçirsiniz. Daha sonra müştəri kodunuzu daxil edib “davam et” düyməsini sıxırsınız. İstədiyiniz məbləği daxil edib təsdiq edirsiniz. Əməliyyatı bitirdikdən sonra məbləğ dərhal balansınızda görünəcəkdir.'
    },
]
export default Balance
