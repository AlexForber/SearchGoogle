


function ResultsSearch(props){
    return(
        <div className="results__search">
            <a className="results__search-link" href="">{props.link}</a>
            <a className="results__search-link-small" href="">{props.slink}</a>
            <p className="results__search-text">{props.text}</p>
            <div className="results__search-wrapper">
                
            </div>
        </div>
            
        
    );

}

export default ResultsSearch;