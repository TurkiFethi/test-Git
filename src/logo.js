import React from "react";

const logo ={
    image:"https://www.docplanner.com/img/logo-default-group-en.svg?v=1",
    
}
function Logo  (props) {
return(
    <div>
    <img className="img-logo" src={logo.image}/>
</div>
);
};
export default Logo;