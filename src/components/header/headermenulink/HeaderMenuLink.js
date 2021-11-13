function HeaderMenuLink(props) {

    

    return (
        <>
        {props.image && <img className="header__menu-image" src={props.image}/>}
        
        <a className="header__menu-link">{props.text}</a>
        </>
        
    );
}

export default HeaderMenuLink;