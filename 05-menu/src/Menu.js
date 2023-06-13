import React from "react";

const Menu = (props) => {
  // console.log(props)
  return (
    <>
      <div className="menu-item">
        <img src={props.data.img} className="photo" />
        <div className="item-info">
          <header>
            <h4 className="item-info">{props.data.title}</h4>
            <p className="price">{props.data.price}</p>
          </header>
          <p className="item-text">{props.data.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
