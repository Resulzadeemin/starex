import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import style from '../Services/Services.module.css'
import { Link } from "react-router-dom"
import servicesBG from "../Img/services.jpg"
function Services() {
    return (
        <div >
            <div className={style.bg}>
                <img src={servicesBG} />
            </div>
            <div className={style.text}>
                <h1>Xidmətlərimiz</h1>
                <p>"STAREX MAĞAZACILIK HİZMETLERİ" Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq əldə etdiyi lisenziya ilə həm ölkədaxili, həm də beynəlxalq poçt bağlamalarının çatdırılmasını həyata keçirir.</p>
            </div>

            <ServiceCard />

            <div className={style.title}>
                <h1>Türkiyədən Çatdırılma</h1>
                <p>“Starex” Türkiyədən online sifariş olunan malların, poçt bağlamaların sürətli çatdırılmasını həyata keçirir. Türkiyədən həftədə 6 dəfə olmaqla göndəriş edilir. Türkiyədən qəbul olunmuş mallar 1-5 gün ərzində Azərbaycana çatdırılır.</p>
            </div>

            <div className={style.title}>
                <h1>Türkiyədən Sifariş və ödənişsiz zəmanət</h1>
                <p>Türkiyədən online alış-veriş səhifələrində hər hansı bir malın alınmasında çətinlik çəkdiyiniz təqdirdə bununla bağlı bizə müraciət edə bilərsiniz. Biz bu xidmətlə həmin malın həm alınmasını, həm də çatdırılmasını təşkil edirik. “Həvalə et” xidməti ilə edilən bütün sifarişlərə zəmanət veririk. Sifarişlərinizdə hər hansı bir yanlışlıq varsa, qırıq, istifadəyə yararsızdırsa, əskik göndərilibsə, xarici anbarımıza təhvil verilib, ancaq sistemə salınmayıbsa, yaxud bağlamanız tapılmırsa, ödədiyiniz məbləği və çatdırılma ödənişini sizə geri qaytarırıq.</p>
            </div>

            <div className={style.title}>
                <h1>Amerikadan Çatdırılma</h1>
                <p>“Starex” Amerikadan online sifariş olunan malların, poçt bağlamaların sürətli çatdırılmasını həyata keçirir. Amerikadan qəbul olunmuş mallar 7-10 gün ərzində Azərbaycana çatdırılır.</p>
            </div>

            <div className={style.title} >
                <h1>Çindən Çatdırılma</h1>
                <p>"Starex" Çindən online sifariş olunan malların, poçt bağlamaların sürətli çatdırılmasını həyata keçirir. Çindən qəbul olunmuş mallar 7-10 gün ərzində Azərbaycana çatdırılır.</p>
            </div>

            <div className={style.title} >
                <h1>Kuryer xidməti</h1>
                <p>Biz həmçinin Bakı anbarına daxil olmuş bağlamanızın istənilən ünvana çatdırılmasını da təşkil edirik. Bununla da siz dəyərli vaxtınızı itirməmiş olursunuz. Qiymətlərlə bağlı <Link to="/tariff">tariflər</Link> bölməsində məlumat əldə edə bilərsiniz.</p>
            </div>

            <div className={style.title} >
                <h1>Adresə çatdırılma</h1>
                <p>Adresə çatdırılma tarifini seçən müştərilərin bağlamaları xarici anbardan birbaşa olaraq müştərinin qeyd etdiyi ünvana çatdırılır. Yəni, daimi olaraq kuryer xidmətimizdən istifadə edən müştərimiz bağlamalarını daha operativ şəkildə təhvil alması mümkün olur. Sadəcə bir dəfə adresə çatdırılma tarifini seçərək bütün bağlamalarınızı ünvanınızdan təhvil ala bilərsiniz. Qiymətlərlə bağlı <Link to="tariff">tariflər</Link> bölməsində məlumat əldə edə bilərsiniz.</p>
            </div>

            <div className={style.title} >
                <h1>Geri qaytarma xidməti</h1>
                <p>Satıcı mağaza tərəfindən defekt, yanlış, zədələnmiş şəkildə göndərilən bağlamaların geri qaytarılmasında müştərilərimizə köməklik göstərə bilməyimiz üçün “Geri qaytarılma” xidmətimiz mövcuddur.
                    Qeyd edək ki, bağlama yerli anbara daxil olduqdan sonra 48 saat ərzində təhvil alınmalı və defekt, yararsız və ya yanlış göndərilibsə növbəti 48 saat ərzində əməkdaşlarımıza məlumat verilməlidir.
                    Geri qaytarma xidmətimiz ödənişlidir.
                    Müştəri bağlamasını hansı tarifə əsasən təhvil alıbsa, həmin tarifə əsasən yenidən geri qaytarılması üçün ödəniş edir.</p>
            </div>

            <div className={style.title} >
                <h1>E-manat vasitəsilə balans artımı </h1>
                <p>TL və USD balanslarının istənilən E-manat terminalı vasitəsilə artırılması mümkündür. </p>
            </div>

            <div className={style.title} >
                <h1>Şəxsi Kabinet</h1>
                <p>• Bağlamanın harda olduğunu izləmək;</p>
                <p>• Bağlamanı bəyan etmək;</p>
                <p>• Müvafiq ofisi seçmək və ya kuryer xidməti sifariş etmək;</p>
                <p>• Balansı doldurmaq və ya çatdırılma haqqını onlayn ödəmək.</p>
            </div>

        </div>
    )
}

export default Services
