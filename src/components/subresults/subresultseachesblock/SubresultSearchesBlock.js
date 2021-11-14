import Less from './../../../assets/images/subresult/less.png';

function SubresultSearchesBlock(props){
    return(
        <div className="subresult__searches-block">
            <img className="subresult__search-image" src={props.image}/>
            <a className="subresult__search-link" href=" ">{props.text}</a>
        </div>
    );
}

export default SubresultSearchesBlock;