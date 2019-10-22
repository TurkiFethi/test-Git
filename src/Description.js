import React from 'react'


function Description (props){
    return(
        
      <div className="bloc-introduction">
      {  props.descriptionList.map((el)=>
        <p className="introduction">{el.paragraph}</p>
        
        )}
        </div>
        

    )
}
export default Description;