import Hlogo from './../../../assets/images/header/image.png';

function HeaderMenuLink(props) {
    return (
        <>
        <img className="header__menu-image" src={Hlogo}/>
        <a className="header__menu-link">{props.text}</a>
        </>
        
    );
}

export default HeaderMenuLink;