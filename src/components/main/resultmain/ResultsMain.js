import LogoSass from './../../../assets/images/results/sass.png'

function ResultsMain(props){
    return(
        <div className="results__main">
            <div className="results__main-top">
                <p className="results__main-text">{props.text}</p>
                <img className="results__main-img" src={LogoSass} alt="logo"/>
            </div>
            <a className="results__main-link">{props.link}</a>
            <a className="results__main-sublink">{props.sublink}</a>
        </div>
            
        
    );

}

export default ResultsMain;