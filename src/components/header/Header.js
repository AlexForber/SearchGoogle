import Logo from './headerlogo/HeaderLogo';
import appG from './../../assets/images/appG.png';
import settings from './../../assets/images/settings.png';
import account from './../../assets/images/account.png';
import HeaderSerch from './headersearch/HeaderSearch';
import HeaderMenuLink from './headermenulink/HeaderMenuLink';



function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__top-block">
                <Logo />
                <HeaderSerch />
                </div>
                <div className="header__top-wrapper">
                    <a className="header__top-link"><img className="header__top-image" src={settings}/></a>
                    <a className="header__top-link"><img className="header__top-image" src={appG}/></a>
                    <a className="header__top-link"><img className="header__top-image"  src={account} /></a>
                </div>
            </div>
            <div className="header__bottom">
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item"><HeaderMenuLink text="All"/></li>
                        <li className="header__menu-item"><HeaderMenuLink text="Images"/></li>
                        <li className="header__menu-item"><HeaderMenuLink text="Videos"/></li>
                        <li className="header__menu-item"><HeaderMenuLink text="News"/></li>
                        <li className="header__menu-item"><HeaderMenuLink text="Books"/></li>
                        <li className="header__menu-item"><HeaderMenuLink text="More"/></li>
                        <li className="header__menu-item"><HeaderMenuLink text="Tools"/></li>
                    </ul>
                </nav>
                
            </div> 
        </header>
    );
}

export default Header;