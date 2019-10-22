import React from "react";

function Navbar(props) {
  return (
    <div>
      <ul className="menu">
        {props.menuList.map((el) => (
          <div>
            <li className="hover-departments" >
              <a className="hover-color" href="#">{el.item}</a>
            </li>
            {el.subMenu ? (
              <ul className="sous-departments">
                {el.subMenu.map((element) => (
                <li className="b">
                  <a className="content" href="#">{element}</a>
                </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
}

/*return(
<div>
    
    <ul className="menu">
    {props.navItems.map((el,i) => <li>{el}</li>
    
    )}
        { <li><a className="hover-color" href="#">{props.navItems.aboutUs}</a></li>
        <li><a className="hover-color" href="#">{props.navItems.career}</a></li>
        <li className="hover-departments"><a className="hover-color" href="#">{props.navItems.departemnets}</a></li>
            <ul className="sous-departments">
                <li><a className="content" href="#">{props.navItems.marketing}</a></li>
                <li><a className="content" href="#">{props.navItems.customer}</a></li>
                <li><a className="content" href="#">{props.navItems.it}</a></li>
                <li><a className="content" href="#">{props.navItems.finance}</a></li>
                <li><a className="content" href="#">{props.navItems.hr}</a></li>
            </ul> */

export default Navbar;
