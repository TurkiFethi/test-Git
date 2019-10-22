import React from "react"
function Party(props){
return(
<div className="bloc-party">
    {props.partyList.map((el,i)=>(
        <div className={`countries ${el.padding}`}>
            <img src={el.image}/>
            <p className="title-countries">{el.subject}</p>
            <p className={`description-countries ${el.paddingCountry}`}>{el.details}</p>
        </div>
    )
        
        
        
        
        
        )}
</div>
);


}
export default Party;