import React, { useState } from "react";
import Menu from "./Menu";
// import Categories from "./Categories";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);
  const filterMenu = (toFilter) => {
    var newMenu;
    if (toFilter === "All") newMenu = data;
    else newMenu = data.filter((item) => item.category === toFilter);
    setItems(newMenu);
  };
  return (
    <>
      <div>
        <h2 className="title">Our restaurant menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            filterMenu("All");
          }}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filterMenu("breakfast");
          }}
        >
          Breakfast
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filterMenu("lunch");
          }}
        >
          Lunch
        </button>
        <button
          className="filter-btn"
          onClick={() => {                        
            
            filterMenu("shakes");
          }}
        >
          Shake
        </button>
      </div>
      <section className="section-center">
        {items.map((item) => {
          return <Menu data={item}>test</Menu>;
        })}
      </section>
    </>
  );
}

export default App;
