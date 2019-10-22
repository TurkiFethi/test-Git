import React from "react"

function ImageCountry(props){
    return(
    <div className="bloc-countries">
{props.ListImageCountry.map((el,i)=>(
        <div className="background-img">
            <img className="image-countries" src={el.image}/>
            <div className="descImg">
            <a className="link-img" href="#">{el.country}</a>
            <button className="btn-img" type="button">{el.button}</button>
            </div>

        </div>
))
}
    </div>
    );
}
export default ImageCountry;