import React from 'react'
import "../FaqComponents/Style.css"
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
function Declaration() {
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
        question: 'Bəyannamə yaradılması vacibdirmi?',
        answer:
            'Bəli, çox vacibdir. Yaratdığınız bəyannamələr məhsullarınızı xarici anbarda sürətli və problemsiz şəkildə sistemə əlavə olunmasına və gömrük sisteminə əlavə olunmasına gətirib çıxarır. Bu baxımdan aldığınız məhsullar üçün bəyannamə yaratmağınız çox vacibdir.'
    },
    {
        question: 'Bəyannamə yaradarkən məndən istənilən məlumatlara nə qeyd etməliyəm?',
        answer:
            'Siz bəyannaməni bağlamanız mağaza tərəfindən kargoya verildikdən sonra əlavə etməlisiniz. Mağaza - sifarişi hansı mağazadan etmisinizsə (sifariş hansı mağaza tərəfindən göndərilirsə) həmin mağazanın adını qeyd edirsiniz. Məhsulun tipi - sifariş etdiyiniz məhsulun növünü qeyd edirsiniz. Miqdar - bəyan etdiyiniz bağlamanın daxilində neçə ədəd məhsul olduğunu qeyd edirsiniz. Məhsulun qiyməti - bəyan etdiyiniz bağlamanın ümumi qiymətini qeyd edirsiniz.  Sənəd - elektron poçt ünvanınıza sifarişinizin mağaza tərəfindən təsdiq edildiyinə dair göndərilən sənədi (faktura) PNG və PDF formatından biri şəklində daxil etməlisiniz. Mağazanın izləmə kodu / Kargo takip numarası -  mağaza tərəfindən sifariş(lər)iniz yola çıxması ilə bağlı göndərilən bildirişdə  qeyd edilən “tracking number” / “teslimat numarası” və ya “kargo takip numarası”  məlumatını mütləq şəkildə əlavə etməlsiniz. Sipariş numarası - sifarişinizin təsdiqi ilə bağlı mağaza tərəfindən sizə göndərilən maildə və ya satıcı mağazanın saytında “Siparişlerim” bölməsində qeyd edilmiş sipariş numarasını əlavə edirsiniz. QEYD: Etdiyiniz sifarişinizin təsdiqi ilə bağlı "sənədi" və "tracking number" məlumatlarını elektron poçt ünvanınızda vəya sifariş etdiyiniz mağazanın veb səhifəsindəki şəxsi kabinetdəki “Orders” (sifarişlərim) bölməsindən əldə edə bilərsiniz. “Tracking number” əsasən sifarişin edildiyi tarixdən  bir neçə gün sonra, sifariş yola düşməzdən öncə elektron poçt ünvanınıza göndərilir və ya sifariş etdiyiniz mağazanın veb səhifəsindəki şəxsi kabinetinizdə  “Orders” (sifarişlərim) bölməsində görə bilərsiniz. "Tracking number"  əsasən “1ZAW78850388496734, TBA048748546000, 9405510205556007725817, 92748901790450583040918342” formasında hərf və rəqəmlər toplusu şəklində olur. Tracking number əlavə edilməsi, bir mağazadan  fərqli tarixlərdə etdiyiniz sifarişlərin  xarici anbara daxil olduqdan sonra  rahatlıqla ayırd edilməsi və izlənilməsi üçün vacibdir.'
    },
    {
        question: 'Öncədən bəyan et nə deməkdir?',
        answer:
            'Həvalə et xidməti ilə göndərdiyiniz sifarişlər təsdiqləndikdən sonra əməkdaşlarımız bağlamalarınız üçün bəyannamə formalaşdırırlar. Bu bəyannamələr ilk öncə "Öncədən bəyan et" bölməsində qeyd edilir. Bağlamanız xarici anbara daxil olduqdan sonra bağlamanız “Xarici anbardadır” statusuna keçir.  '
    },
    {
        question: 'Tamamlanmamış bəyənnamə” nə deməkdir?',
        answer:
         'Xarici anbarımıza daxil olmuş bağlamaların içərisində müştərinin daha öncə bəyan etmədiyi bağlama olduqda və bu bağlamadakı məhsulun qiyməti, tipi və mağazanın adını xarici anbarımızda müəyyənləşdirmək mümkün olmadıqda bu bağlamanın statusu "Tamamlanmamış bəyannamə" statusuna keçirilərək bununla bağlı müştəriyə məlumat göndərilir. Müştəri şəxsi kabinetində "Tamamlanmamış bəyənnamə" statusuna daxil olaraq həmin bağlamanı görə və məlumatlarında düzəliş edə bilər. Müştəri yalnız məlumatları tam şəkildə bəyannamədə qeyd etdikdən sonra bağlama yola çıxması üçün hazırlanır. Müştəri bu məlumatları bəyannaməyə daxil edənədək Gömrük orqanlarının tələbinə əsasən bağlamanın göndərişinin həyata keçirilməsi mümkün olmur.  '
    },
    {
        question: 'Bəyannamə nədir?',
        answer:
           'Bəyannamə məhsulunuzun ölkə xaricindən çatdırılması üçün zəruri olan elektron sənəddir. Xarici saytlardan aldığınız məhsulların hər hansı çətinlik olmadan ölkəmizə çatırılması və gömrük sisteminə əlavə olunması üçün bəyannamə yaratmağınız çox vacibdir. Starex şəxsi kabinetinizdən “Bəyannamə əlavə et” düyməsini sıxaraq müvafiq ölkə seçiminə uyğun bəyannamə əlavə edə bilərsiniz. '
    },
    
]
export default Declaration
