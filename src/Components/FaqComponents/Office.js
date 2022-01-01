import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Office() {
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
        question: 'Bağlamamı başqa biri mənim yerimə təhvil ala bilər?',
        answer:
            'Bəli, sizin şəxsiyyət vəsiqənizlə (vəsiqənizin şəkli ilə də mümkündür) müştəri kodunuzu təqdim edərək başqa biri bağlamanızı təhvil ala bilər.'
    },
    {
        question: 'Yerli anbara çatdırılan bağlamamı necə təhvil ala bilərəm?',
        answer:
            'Bağlamanızın yerli anbarda olduğunu təsdiqləyən sms və mail bildirişi aldıqdan sonra siz şəxsiyyət vəsiqənizlə və ya vəsiqənizin şəkli ilə ofisimizə yaxınlaşaraq bağlamanızı təhvil ala bilərsiniz. Bağlamanızı təhvil ala bilməyiniz üçün müştəri kodunuzu və şəxsiyyətinizi təsdiq edən sənədi təqdim etməlisiniz. Eyni zamanda Bakı və Sumqayıt ofislərimiz üzrə kuryer xidmətimizdən istifadə etməklə də bağlamanızı təhvil ala bilərsiniz. “Tariflər” bölməsinə keçid edərək kuryer tariflərimizlə tanış ola bilərsiniz.  Xırdalan, Mingəçevir və Gəncə filiallarımızda kuryer xidmətimiz mövcud deyildir.   '
    },
    {
        question: 'Bağlamam yerli anbarda nə qədər müddət qala bilər?',
        answer:
            'Bağlamalarınız yerli anbarda 15 gün ərzində saxlanması ödənişsizdir. 16-30 gün ərzində hər günə görə əlavə 0.50 AZN, 31-45 gün ərzində isə hər günə görə əlavə 1 AZN dəbbə pulu hesablanacaq. 45 gündən artıq yerli anbarda qalan məhsul üçün qərar Starex MMC-yə məxsus olacaqdır. '
    },
    {
        question: 'İş saatlarınız necədir?',
        answer:
            'Gənclik filialımız: bazar ertəsi-şənbə 10:00-21:00 İnşaatçılar filialımız: bazar ertəsi-şənbə 10:00-21:00 Xalqlar dostluğu filialımız: bazar ertəsi-şənbə 10:00-21:00 Sumqayıt filialımız: bazar ertəsi-şənbə 10:00-21:00 Xırdalan filialımız: bazar ertəsi-şənbə 10:00-21:00 Gəncə filialımız: bazar ertəsi-şənbə 10:00-19:00 Mingəçevir  filialımız: bazar ertəsi-şənbə 10:00-19:00   Çağrı mərkəzi və digər platformalarda cavablandırma bazar ertəsi - şənbə günləri 10:00-dan 19:00-dək fəaliyyət göstərir. Sifarişlərin təsdiqlənməsi həftənin bütün günləri 10:00-dan 00:00-dək həyata keçirilir.'
    },
    {
        question: 'Ofisləriniz harada yerləşir?',
        answer:
            'Starex-in ölkəmizdə 7 filialı var. Bunlardan 4-ü Bakı şəhərində (Gənclik filialı, Xalqlar dostluğu filialı, İnşaatçılar filialı, Xırdalan filialı), digər 3-ü isə Sumqayıt, Mingəçevir və Gəncə şəhərində yerləşir. Ofisləriminiz ünvanını sizə təqdim edirik: - Gənclik filialı. Ünvan: Atatürk prospekti, 4A, Gənclik metrosunun yanı - Xalqlar dostluğu filialı. Ünvan: Xətai rayonu, Məhəmməd Hadi küçəsi 2 - İnşaatçılar filialı. Ünvan: Şərifzadə küçəsi 174 (İnşaatçılar metrosunun çıxışı, Kolorit restoranının yanı) - Xırdalan filialı. Ünvan: Heydər Əliyev Prospekti 67 (Kontakt Home-un yanı) - Sumqayıt filialı. Ünvan: Bakı küçəsi 107, Aviakassanın yanı - Gəncə filialı. Ünvan: Nəriman Nərimanov küçəsi 298F, Köhnə Yevlax avtovağzalı ilə üzbəüz - Mingəçevir filialı. Ünvan: Mingəçevir şəhər,M.Maqomayev küçəsi 12 (Soliton-un yanı)'
    }
]
export default Office
