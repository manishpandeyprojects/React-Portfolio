import React from "react";

const MenuItem = (props) => {
  return (
    <li onClick={()=>props.setMenuOpen(!props.menuOpen)}>
      <a href={props.id}> {props.title} </a>
    </li>
  );
};

export default MenuItem;
