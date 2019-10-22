import React from "react";

function Card(props) {
    
  return (
    <div className="bloc-cards">
      {props.cardList.map((el, i) => (
        <div className={`position ${el.background}`} >
          <p className="item-patient">{el.type}</p>
          <p className="discription-patient">{el.description}</p>
          <div className="x">
            {el.country ? (
          <select className="select">{el.country.map((element,j)=>(
                <option value={element}>{element}</option>
            ))}
            
          </select>
          ): null}
          <img className="img-patient" src={el.image} />
          </div>
          </div>
        
      ))}
    </div>
  );
}
export default Card;
