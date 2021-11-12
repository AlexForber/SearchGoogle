import QueriesLink from "./querieslink/QueriesLink";
import Logo from "./../../assets/images/googlelogo.png";


function Queries(){
    return(
        <section className="queries">

            <h2 className="queries__title">Related searches</h2>

            <div className="queries__wrapper">
                <QueriesLink text="scss tutorial"/>
                <QueriesLink text="scss vs css"/>
                <QueriesLink text="how to used in html"/>
                <QueriesLink text="scss example"/>
                <QueriesLink text="scss file"/>
                <QueriesLink text="scss vs sass"/>
                <QueriesLink text="scss extend"/>
                <QueriesLink text="scss react"/>
            </div>

            <div className="queries__bottom">
                <img className="queruies__bottom-image" src={Logo}/>
                <div className="queries__bottom-wrapper">
                    <a className="queries__bottom-link" href=" ">1</a>
                    <a className="queries__bottom-link" href=" ">2</a>
                    <a className="queries__bottom-link" href=" ">Next</a>
                </div>
            </div>
        </section>
    );
}

export default Queries;