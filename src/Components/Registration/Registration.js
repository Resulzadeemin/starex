import React from 'react'
import style from "../Registration/Registration.module.css"
import { useState } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { Modal, Button } from 'antd';
function Registration() {
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        sex: "",
        email: "",
        password: "",
        passwordagain: "",
        check: false,
        id: nanoid()
    })
    const { firstname, lastname, email, password, passwordagain, check, loading } = state
    const [sex, setSex] = useState("Kişi")
    const [error, setError] = useState("")

    function inputHandler(e) {
        const click = e.target.name;
        let a;
        if (click === "check") {
            a = e.target.checked
        }
        else {
            a = e.target.value
        }

        const value = e.target.value
        setState({
            ...state,
            sex: sex,
            [e.target.name]: value
        })
    }
    function selectHandlerSex(e) {
        setSex(e.target.value)
    }


    function submitHandler(e) {
        e.preventDefault()
        setState({ loading: true, })
        setTimeout(() => {
            setState({
                loading: false,
                firstname: "",
                lastname: "",
                sex: "",
                email: "",
                password: "",
                passwordagain: ""
            })
        }, 2000);

        if (check === false) {
            setError("İstifadəçi razılaşmasını qəbul etmək vacibdir.")
        }
        if (password !== passwordagain) {
            setError("Parolu yenidən düzgün daxil edin.")
        }
        if (password?.length <= 6) {
            setError("Parol 6 şifrədən azdır.")
        }

        fetch("http://localhost:5000/support", {
            method: 'POST',
            body: JSON.stringify({
                ...state
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <form className={style.regis} onSubmit={submitHandler}>
                <div className={style.title2}>
                    <h1>Qeydiyyat</h1>
                </div>
                <div className={style.firstname}>
                    <h1><span className={style.star}>*</span>Ad</h1>
                    <input
                        required
                        onChange={inputHandler}
                        name="firstname"
                        value={firstname}
                        type="text"
                    />
                </div>
                <div className={style.lastname}>
                    <h1>Soyad</h1>
                    <input
                        onChange={inputHandler}
                        name="lastname"
                        value={lastname}
                        type="text"
                    />
                </div>
                <div className={style.sex}>
                    <h1>Cinsinizi seçin</h1>
                    <select value={sex} name='sex' onChange={selectHandlerSex}>
                        <option value="Kişi">Kişi</option>
                        <option value="Qadin">Qadin</option>
                        <option value="Her-ikisi">Her-ikisi</option>
                    </select>
                </div>
                <div className={style.email}>
                    <h1><span className={style.star}>*</span>Email</h1>
                    <input
                        required
                        onChange={inputHandler}
                        name="email"
                        value={email}
                        type="email"
                    />
                </div>
                <div className={style.password}>
                    <h1><span className={style.star}>*</span>Şifrə</h1>
                    <Space direction="vertical">
                        <Input.Password
                            required
                            onChange={inputHandler}
                            name="password"
                            value={password}
                            type="password"
                        />
                    </Space>
                </div>
                <div className={style.passwordagain}>
                    <h1><span className={style.star}>*</span>Tekrar Şifrə</h1>
                    <Space direction="vertical">
                        <Input.Password
                            required
                            onChange={inputHandler}
                            name="passwordagain"
                            value={passwordagain}
                            type="password"
                        />
                    </Space>
                </div>
                <div className={style.check}>
                    <input
                        required
                        onChange={inputHandler}
                        name="check"
                        value={check}
                        type="checkbox"
                    />
                    <span><Link type="primary" onClick={showModal}>Daşınma şərtləri</Link>ni oxudum və qəbul edirəm.</span>
                </div>
                <div className={style.registration}>
                    <button type="submit">
                        {
                            loading && <span>QEYDİYYATDAN KEÇİLİR..</span>
                        }
                        {
                            !loading && <span>QEYDİYYATDAN KEÇ</span>
                        }
                    </button>
                </div>
                <div className={style.answer}>
                    {
                        error && <h2>{error}</h2>
                    }
                </div>
            </form>
            <Modal
                title="Daşıma şərtləri"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <p>“Həvalə et” xidməti ilə sifariş edildiyi halda 1.1 “Həvalə et” xidməti ilə edilən bütün sifarişlərə zəmanət veririk. caqdır.
                    8.3 Uzunluğu 1 metrdən yuxarı olan məhsulların Türkiyədən çatdırılma ödənişi fiziki çəki + 5$ olaraq hesablanır.
                    8.4 Amerika və Çindən gələn bağlamaların uzunluğu 1 metrdən yuxarı olduqda çatdırılma ödənişi həcm çəkisinə uyğun hesablanır.
                    Hesablama qaydası: en * uzunluq * hündürlük/ 6000 8.5 Amerika və Çindən gələn bağlamaların uzunluğu bir tərəfin uzunluğu 120 sm-dən uzun olan bağlamalara həcmi çəkidən əlavə 50$ daşınma haqqı hesablanır.
                    8.6 Amerika və Çindən gələn qeyri standart ölçülü bağlamalar həcm çəkisinə əsasən hesablanır.
                    8.7 Amerika və Çindən çatdırılan qeyri standart ölçülü bağlamalar həcm və fiziki çəki arasında fərq 1.5 kq-dan çox olduqda hesablama həcm çəkisi üzərindən aparılacaqdır.
                    Məsələn, bir bağlamanın fiziki çəkisi 5 kq, həcmi 0.045 kubdan çox olduqda həcm çəkisi üzərindən hesablama aparılır.
                    Belə ki, 0.045 kubun həcm çəkisi 7.5 kq-dan yüksək olur. 8.8 Qəbul olunan bağlama ofisimizdə, kuryer çatdırılması edilibsə, kuryerin yanında yoxlanılmalıdır.
                    Məhsulda hər hansı bir xəsarət olduğu təqdirdə yerindəcə əməkdaşlarımıza və ya kur
                </p>
            </Modal>
        </div>
    )
}

export default Registration
