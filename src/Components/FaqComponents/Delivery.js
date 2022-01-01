import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Delivery() {
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
        question: 'Amerikadan  Azərbaycana çatdırılma qiymətləri necə hesablanır?',
        answer:
            'Amerikadan Azərbaycana çatdırılma qiymətləri 2-7.9 dollar aralığında dəyişir. Ətraflı “Tariflər” bölməsindən tanış ola bilərsiniz.'
    },
    {
        question: 'Türkiyədən Azərbaycana çatdırılma qiymətləri necə hesablanır?',
        answer:
            'Türkiyədən Azərbaycana çatdırılma qiymətləri 1.5-5.5 dollar aralığında dəyişir. Ağır çəkili bağlamalar daha sərfəli tariflərlə hesablanır. Ətraflı “Tariflər” bölməsindən tanış ola bilərsiniz'
    },
    {
        question: 'Amerika, Almaniya və Çindən sifaris neçə günə çatdırılır?',
        answer:
            'Amerika və Çindən çatdırılma müddəti sifariş verdiyiniz saytdan asılı olaraq dəyişir. Siz sifarişi verdikdən sonra satıcı firmalar həmin bağlamanı şirkətimizin müvafiq ölkədəki anbarına təhvil verir. Satıcı firmalarda çatdırılma müddəti əsasən 3-7 gün aralığında olur. Həftəsonları və rəsmi bayram günləri satıcı firmaların çatdırılma müddəti uzana bilər. Satıcı firma sizin sifarişinizi şirkətimizin xaricdəki anbarına çatdırdıqdan 7-10 gün sonra sifarişiniz ölkəmizə göndərilir. Amerika və Çindən bağlamalar ölkəmizə həftə ərzində 1 dəfə göndərilir.'
    },
    {
        question: 'Türkiyədən sifariş neçə günə çatdırılır?',
        answer:
            'Ümumilikdə Türkiyədən olan sifarişlər həftədə 6 dəfə olmaqla ölkəmizə yola düşür və ən qısa müddətdə yerli anbarımızda olur. Bağlamanın Türkiyə ofisimizdə sistemə əlavə edildikdən sonra yerli anbarımıza çatdırılma müddəti əsasən 3-5 gün təşkil edir. Satıcı mağazaların bizim Türkiyə ofisimizə çatdırılma müddəti mağazadan, məhsulun təmin edilmə müddətindən asılı olaraq dəyişir.'
    },
    {
        question: 'Sifarişin alış-veriş etdiyiniz mağazadan xarici anbara catdırlıması necə olur?',
        answer:
            'Sifariş mağaza tərəfindən təsdiqləndikdən sonra təyin edilmiş çatdırılma müddəti ərzində daxili karqo şirkəti və ya poçt xidməti vasitəsilə xaricdəki ünvanlarım bölməsində qeyd edilən ünvana çatdırılaraq daşıma şərtlərinə uyğun olaraq səlahiyyətli şəxsə təhvil verilir. Sifarişin çatdırılması çatdırılma edən karqo şirkətinin bazasında təhvil alanın elektron imzasıyla təsdiqlənir və çatdırılma bununla tamamlanır. Bəzən Amerikada poçt (Usps) vasitəsilə çatdırılan bağlamalar müştəriyə “Çatdırılıb” olaraq bildirilsə də çatdırılması bir həftəyə qədər uzana bilər.'
    },
    {
        question: 'Bağlamanın çəkisi necə hesablanır?',
        answer:
           'Xarici anbarımıza daxil olan hər bir bağlama ayrılıqda fiziki çəkisinə əsasən hesablanır. “Tariflər” bölməsinə keçid edərək müvafiq ölkələr üzrə tariflərə nəzər yetirə bilərsiniz. Uzunluğu 1 metrdən artıq olan bağlamaların çatdırılma ödənişi ölkələrə görə dəyişir. Əgər bağlamanız Türkiyədən göndərilibsə bağlamanızın fiziki çəkisinə görə hesablanan məbləğdən əlavə 5$ da ödəniş edirsiniz. Amerika və Çindən gələn bağlamaların uzunluğu 1 metrdən yuxarı olduqda çatdırılma ödənişi həcm çəkisinə uyğun hesablanır. Hesablama qaydası: en * uzunluq * hündürlük/ 6000 Bir tərəfin uzunluğu 120 sm-dən uzun olan bağlamalara həcmi çəkidən əlavə 50$ daşınma haqqı hesablanır.  '
    },
    {
        question: 'Amerika, Çin və Almaniyadan maye məhsullarının daşınması mümkündürmü?',
        answer:
            'Almaniya və Çindən maye məhsullarının gətirilməsi mümkün deyil. Amerikadan məhsulun tərkibində spirt, tezalışan maddə olmadığı təqdirdə gətirilməsi mümkündür. (parfumeriya, sprey, lasyon, mist, quru şampun, boyalar və s. gətirilmir)  '
    },
    {
        question: 'Çindən Azərbaycana çatdırılma tarifləri necə hesablanır?',
        answer:
            'Çindən Azərbaycana çatdırılma qiymətləri 4.9-9.5 dollar aralığında dəyişir. Ağır çəkili bağlamalar daha sərfəli tariflərlə hesablanır. Ətraflı “Tariflər” bölməsindən tanış ola bilərsiniz.'
    },
    {
        question: 'Türkiyədən maye məhsullarının gətirilməsi mümkündür?',
        answer:
            'Bəli, mümkündür. Qeyd edək ki, maye məhsullarının tarifləri standart tariflərlə eynidir və həftədə 1 dəfə olmaqla göndəriş edilir. Türkiyə anbarımıza daxil olan və tərkibində ən az bir maye məhsulu olan bağlamaların tam çəkisi maye tariflərinə əsasən hesablanır. “Tariflər” bölməsinə keçid edərək maye məhsullarının çatdırılma tarifləri ilə tanış ola bilərsiniz.'
    },
]
export default Delivery
