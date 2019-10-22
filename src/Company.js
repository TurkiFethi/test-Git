import React from 'react'

function Company (props){
return(
    <div className="list-logo">
        {props.companyList.map((el,i)=>
            
            <a href={el.link}><svg className="culture" xmlns={el.xmlns} width={el.width} height={el.height} viewBox={el.viewBox}><path d={el.path}></path></svg></a>
            
            )}
    </div>
)
}
export default Company;