import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Order() {
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
        question: 'Türkiyədən necə sifariş edə bilərəm?',
        answer:
            'Siz özünüz birbaşa mağazadan və ya bizim Həvalə et xidmətimizdən istifadə edərək sifariş edə bilərsiniz. Sifariş üçün ilk olaraq starex.az saytımızda qeydiyyatdan keçməlisiniz.    1. Özünüz birbaşa mağazadan sifariş etdiyiniz zaman sizdən tələb olunan teslimat ünvanı bölməsində saytımızda şəxsi kabinetinizdə "Xaricdəki ünvanlarım" bölməsindəki Türkiyə ofisimizin ünvanını qeyd edirsiniz. Sonra isə xarici saytlarda keçərli olan bank kartı vasitəsilə ödənişi edərək, sifarişi tamamlayırsınız. Son olaraq, Starex.az saytımızdakı şəxsi hesabınıza daxil olaraq aldığınız məhsula uyğun bəyannamə yaradırsınız. Mağaza sizin sifarişinizi bizim Türkiyə ofisimizə çatdırır, bağlamanızı Smart Customsda bəyan etdikdən sonra biz də Bakıya gətiririk. Sifarişdən sonra saytımızda Bəyannamə əlavə etməlisiniz.  Linkə keçid edib, videonu izləyərək ətraflı məlumat əldə edə bilərsiniz. https://www.youtube.com/watch?v=5VooG5D7AZE&t;=1s   2. Həvalə et xidmətimizlə biz sizin üçün sifarişi həyata keçiririk. Üstəlik, "Həvalə et" xidmətimizlə etdiyiniz bütün sifarişlərin doğruluğuna zəmanət veririk.    Almaq istədiyiniz məhsulun linkini "Sifarişlərim" bölməsində "Sifariş et" düyməsini sıxaraq yerləşdirirsiniz.    Starex balansınızı artırdıqdan sonra "Sifarişlərim" bölməsində "ÖDƏ" düyməsini sıxaraq sifarişlərinizi ödəyirsiniz.   Starex balansınızı kartla, E-manat terminalında və ya ofislərimizdə nağd şəkildə artıra bilərsiniz. Qeyd edək ki, Həvalə et xidmətimizlə Türkiyədən sifariş zamanı 5% komissiya mövcuddur.    Sifariş prosesi ilə bağlı linkə daxil olub, videonu izləyərək ətraflı məlumat əldə edə bilərsiniz. https://www.youtube.com/watch?v=Xb7HDb1JlzQ '
    },
    {
        question: 'Nə sifariş edə bilərəm?',
        answer:
            'Onlayn alış-veriş saytlarından (trendyol, HM, Flo, amazon, ebay, walmart, aliexpress və.s) geyim, qadın çantası, kosmetika, ayaqqabı, bujeteriya, uşaq oyuncaqları, uşaq geyimləri və s. sifariş edə bilərsiniz. Qeyd edək ki, Amerikadan tərkibində spirt, tezalışan maddə olan məhsulların, Çindən isə batareya və maye məhsullarının daşınması mümkün deyildir. '
    },
    {
        question: 'Araşdırılır" statusunda olan sorğunun cavablandırılma müddəti nə qədərdir?',
        answer:
            'Araşdırma müddəti əsasən 15 iş gününü əhatə edir. Satıcı firmalara göndərdiyimiz müraciətlər bəzən çox gec cavablandığı üçün bəzən bu müddət bir qədər uzana bilir.'
    },
    {
        question: 'Araşdırma zamanı mağaza ilə danışıqlar neçə müddət ərzində nəticələnir?',
        answer:
            'Müştərilərimiz bizə müraciət etdiyi andan etibarən satıcı mağaza ilə əlaqə saxlayıb işləm başladırıq. Satıcı mağaza tərəfindən ilkin mərhələdə 7 iş günü ərzində məlumat veriləcəyi bildirilir. Sorğuya əsasən bu müddət bir qədər uzana bilir.'
    },
    {
        question: 'Amerika, Almaniya və Çindən necə sifariş edə bilərəm?',
        answer:
            'Amerika, Almaniya və Çindən sifariş üzrə “Həvalə et” xidmətimiz mövcud deyildir. Siz öz kartınızla, bizim xarici ünvanlarımızı qeyd edərək sifariş edə bilərsiniz. Sifariş üçün: 1. Starex.az saytımızda qeydiyyatdan keçirsiniz. 2. Mağazanın sifarişin çatdırılması üçün sizdən tələb etdiyi ünvan yerinə bizim müvafiq ölkə üzrə ofis ünvanımızı qeyd edirsiniz. Starex şəxsi kabinetinizdə “Xaricdəki ünvanlarım” bölməsinə daxil olaraq məlumatları əldə edə bilərsiniz. 3. Xarici saytlarda keçərli olan bank kartı vasitəsilə ödənişi edərək, sifarişi tamamlayırsınız. 4. Sifariş tamamlandıqdan sonra saytımızda “Bəyannamə” əlavə etməlisiniz.  '
    },
    {
        question: 'Saytınızda sorğu yaratmışam. Nə qədər müddətə cavab alacam?',
        answer:
            "“Onlayn müraciət et” bölməsindən qəbul edilən bütün sorğuları 2 iş günü ərzində cavablayırıq. Sorğunuzu cavabladıqda sizə mail vasitəsilə bildiriş göndərilir. Cavabı “Müraciətlər” bölməsindən izləyə bilirsiniz."
    },
    {
        question: 'Həvalə et xidməti nədir və necə istifadə edə bilərəm?',
        answer:
            'Həvalə et xidmətimizlə biz sizin üçün Türkiyədən sifarişi həyata keçiririk. 1. Almaq istədiyiniz məhsulun linkini "Sifarişlərim" bölməsində "Sifariş et" düyməsini sıxaraq yerləşdirirsiniz.  2. Starex balansınızı artırdıqdan sonra "Sifarişlərim" bölməsində "ÖDƏ" düyməsini sıxaraq sifarişlərinizi ödəyirsiniz. Starex balansınızı kartla, e manat terminalı ilə və ya ofislərimizdə nağd şəkildə artıra bilərsiniz. Qeyd edək ki, Həvalə et xidmətimizlə Türkiyədən sifariş zamanı 5% komissiya mövcuddur.  Sifariş prosesi ilə bağlı linkə daxil olub, videonu izləyərək ətraflı məlumat əldə edə bilərsiniz. https://www.youtube.com/watch?v=Xb7HDb1JlzQ '
    },
    {
        question: 'Sifarişim yanlış gəlib. Nə edə bilərəm?',
        answer:
            'Biz daşıma şirkəti olaraq xarici anbarımıza daxil olan bağlamaların Azərbaycana çatdırılmasında vasitəçilik edirik. Şirkətimiz göstərdiyi vasitəçilik xidməti çərçivəsində heç bir halda satıcı firmanın göndərdiyi məhsulun keyfiyyətinə, tamlığına, tərkibinə, ölçü və formasına, satış anbarında tükənməsinə, vaxtında çatdırılmasına  görə məsuliyyət daşımır. Mağazaya məxsus yanlışlıqlarda müştərilərimizin daha az zərərlə çıxmasını təmin edə bilmək üçün “Geri qaytarma”  xidmətimiz mövcuddur. Geri qaytarma xidmətimizdə şərtlərimiz belədir: 1. Yalnız mağaza tərəfindən yanlış və ya yararsız halda göndərilmiş məhsulların geri qaytarılması mümkündür. 2. Bağlama Bakı ofisimizə daxil olduqdan sonra 48 saat ərzində təhvil alınmalıdır və yerindəcə yoxlanılıb, geri qaytarma xidməti üçün müraciət edilməlidir. 3. Sifarişlər çəkiyə uyğun tariflərlə geri qaytarılır. Lakin, mövcud vəziyyətlə əlaqədar olaraq reyslər məhdud olduğundan Azərbaycandan Türkiyəyə kargo daşınması müvəqqəti olaraq mümkün deyildir. Bu xidmət kargo təyyarələri ilə deyil, sərnişin təyyarələri ilə həyata keçirilirdi. Bu səbəbdən də reyslər əvvəlki kimi intensiv olana kimi xidmətimiz aktiv edilməyəcəkdir.'
    },
    {
        question: 'Sifarişimi necə izləyə bilərəm?',
        answer:
            'Sifarişlərinizi şəxsi kabinetdən asanlıqla izləyə bilərsiniz. Bunun üçün sifarişlərim menyusuna daxil olun və müvafiq sifarişin qarşısındakı “Bağlamaya keç” düyməsinə klikləyin. Bu zaman avtomatik olaraq “Bağlamalar” bölməsinə keçid etmiş olacaqsınız və sifarişinizin hansı bağlamada gələcəyi xüsusi işarələnərək sizə göstəriləcək. Burada siz bağlamanın izləmə kodunu da görə bilərsiniz. Həmin bağlamanın statuslarına baxaraq (məsələn xarici anbardadır, yoldadır, yerli anbardadır) bağlamanızı izləyə bilərsiniz. Eyni zamanda həmin bağlamanızın statusu dəyişdikdə bununla bağlı sizə həm sms, həm də e-mail vasitəsilə məlumat göndəriləcək.'
    },
]

export default Order
