import Logo from './headerlogo/HeaderLogo';
import appG from './../../assets/images/appG.png';
import settings from './../../assets/images/settings.png';
import account from './../../assets/images/account.png';
import HeaderSerch from './headersearch/HeaderSearch';
import HeaderMenuLink from './headermenulink/HeaderMenuLink';
import Book from './../../assets/images/header/book.png';
import Image from './../../assets/images/header/image.png';
import placeholder from './../../assets/images/header/placeholder.png';
import Youtube from './../../assets/images/header/youtube.png';
import News from './../../assets/images/header/news.png';
import More from './../../assets/images/header/more.png';




function Header() {

    const imagesArray = [{id:1 ,text:'All' ,image:placeholder}, {id:2 ,text:'Book' ,image:Book}, {id:3 ,text:'Video' ,image:Youtube}, {id:4 ,text:'Images' ,image:Image}, {id:5 ,text:'News' ,image:News}, {id:6 , text:'More', image: More} ,{id:7, text:'Tools'}];
    console.log(imagesArray);

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
                        {imagesArray.map(item =>{
                            return(

                                <li key={item.id} className="header__menu-item"><HeaderMenuLink image={item.image} text={item.text}/></li>
                            )
                        })}
                    </ul>
                </nav>
                
            </div> 
        </header>
    );
}

export default Header;