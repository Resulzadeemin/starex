import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Customs() {
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
        question: 'Gömrük limitini keçdiyimi necə izləyə bilərəm?',
        answer:
            'Starex-də şəxsi kabinetinizə daxil olaraq cari təqvim ayı üçün limitinizi izləyə bilərsiniz. Starex şəxsi kabinetinizdə yalnız Starex vasitəsilə ölkəyə gətirilən bağlamalara əsasən limitinizi izləyə bilirsiniz. Qeyd edək ki, əvvəl bu limit son 30 gün ərzində hesablanırdısa, yeni qaydaya əsasən cari ay üçün hesablanır. Yəni, siz 1 təqvim ayı müddətində (məsələn, noyabr) 300 ABŞ dolları məbləğini keçməmək şərti ilə istədiyiniz qədər bağlama gətirə bilərsiniz.'
    },
    {
        question: 'Aylıq gömrük limiti necə hesablanır?',
        answer:
            'Aylıq limit hesablanarkən sizin həmin ay ərzində gömrük sisteminə əlavə olunan bağlamalarınız nəzərə alınır. Aylıq limiti hesablamaq üçün həm bağlamanın içərisindəki məhsulların qiyməti, həm də çatdırılma qiyməti cəmlənir.  '
    },
    {
        question: 'Eynicinsli məhsullardan bir neçə dənə gətirməyə hər hansı limit tətbiq olunurmu?',
        answer:
            'Limiti keçmədiyiniz təqdirdə istənilən sayda bağlama gətirə bilərsiniz. Qeyd edək ki, ay ərzində 2 ədəddən artıq eynicinsli məhsul sifariş etdiyiniz zaman satış məqsədli olub-olmamasının təyin edilməsi məqsədi ilə  gömrük tərəfindən saxlanıla bilər. Satış məqsədli olduğu təqdirdə rüsuma cəlb ediləcəkdir. Əgər, siz şəxsi istifadə üçün sifariş edirsinizsə, bunu bağlamanız saxlanıldığı təqdirdə gömrük orqanlarına bildirə bilərsiniz.  '
    },
    {
        question: 'Bağlamamın gömrükdə saxlanılması ilə bağlı bildiriş aldım. Nə etməliyəm?',
        answer:
            'Bağlamanızı təhvil almaq üçün ilk öncə ofisimizə yaxınlaşıb bağlamalarınız üçün çatdırılma haqqını ödəyib qaimə və barkodu  əldə edirsiniz. Daha sonra, bu sənədlər əsasında Hava Nəqliyyatında Baş Gömrük İdarəsinə müraciət edərək bağlamanız haqda ətraflı məlumat əldə edib rəsmiləşdirə və Bakı Karqo Terminalında saxlama xərclərini ödəyərək təhvil ala bilərsiniz. Xatırladaq ki, Şəxsi istifadə limitini (300$) keçdikdə, gömrük orqanı məhsulunuzun kommersiya məqsədli olduğu qənəatinə gəldikdə və ya qadağan olunmuş məhsul olduqda həmin bağlamalar gömrük orqanı tərəfindən saxlanılır. Bununla bərabər bağlamanız gömrük rüsumuna və əlavə dəyər vergisinə tabe edilir. Rüsumun maksimum həddi 36% təşkil edir.'
    },
    {
        question: 'Bağlamam hansı hallarda Gömrük orqanları tərəfindən saxlana bilər?',
        answer:
            '1.Sifarişlərin 1 təqvim ayı ərzində ümumi dəyəri 300 ABŞ dolları məbləğini keçdikdə, 2.Sifariş verdiyiniz məhsulun Gömrük orqanı tərəfindən  kommersiya məqsədli oldugunu təyin edildikdə, 3.Ölkəyə idxalı qadağan olan məhsullar olduqda sifarişiniz gömrükdə saxlanıla bilər.  '
    }
]
export default Customs
