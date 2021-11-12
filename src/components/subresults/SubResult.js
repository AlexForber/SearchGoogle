import SubresultSearchesBlock from "./subresultseachesblock/SubresultSearchesBlock";
import SassLogo from "./../../assets/images/subresult/subresultsass.png";

function SubResult(){
    return(
        <div className="subresult">
            <div className="subresult__top">
                <div className="subresult__top-wrapper">
                    <h2 className="subresult__title">Sass</h2>
                    <span className="subresult__subtitle">Programming language</span>
                </div>
                <img className="subresult__image" src={SassLogo}/>
            </div>

            <div className="subresult__main">
                <p className="subresult__text">Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.
Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.<br/> <a className="subresult__text-link" href=" " >Wikipedia</a></p>

                <ul className="subresult__list">
                    <li className="subresult__list-item"><span className="subresult__list-modification">Type:</span>  Compiling Template Engine</li>
                    <li className="subresult__list-item"><span className="subresult__list-modification">License: </span>MIT License</li>
                    <li className="subresult__list-item"><span className="subresult__list-modification">Latest version:</span> 3.5.5</li>
                    <li className="subresult__list-item"><span className="subresult__list-modification">First issue:</span> November 28, 2006</li>
                    <li className="subresult__list-item"><span className="subresult__list-modification">Operating system:</span> Cross-platform</li>
                </ul>

                <div className="subresult__searches">                  
                        
                        <span className="subresult__searches-similar"></span>
                        <div className="subresult__searches-wrapper">
                            <SubresultSearchesBlock text="Less"/>
                            <SubresultSearchesBlock text="Less"/>
                            <SubresultSearchesBlock text="Less"/>
                            <SubresultSearchesBlock text="Less"/>
                        </div>
                    
                </div>
            </div>
        </div>
            
        
    );

}

export default SubResult;