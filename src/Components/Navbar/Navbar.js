import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "../Img/starexLogo.svg";
import "../Navbar/Navbar.css"

function Navbar() {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }

    return (
        <header className="header__middle">
            <div className="container">
              
                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/starex">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav " >

                            {/* Responsive Menu Button */}
                            {
                                isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} ><HiMenuAlt2 /></span>
                                </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} ><HiMenuAlt3 /></span>
                                </>
                            }
                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/about`}>Haqqında</NavLink> </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/services`}>Xidmətlər </NavLink> </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/tariff`}>Tariflər</NavLink> </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/shops`}>Mağazalar </NavLink> </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/news`}>Xəbərlər</NavLink> </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/faq`}>FAQ</NavLink> </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/contact`}>Əlaqə </NavLink> </li>
                                <li type="btn1" className="menu-item " ><NavLink onClick={toggleClass} to={`/login`}>Sifariş Et </NavLink> </li>
                                <li type="btn2" className="menu-item " ><NavLink onClick={toggleClass} to={`/login`}>Bəyan Et</NavLink> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
          
        </header>
    )
}

export default Navbar
