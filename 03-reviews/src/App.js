import React, { useState } from "react";
import data from "./data.js";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
function App() {
  const [userIndex, setUserIndex] = useState(0);
  const { name, job, image, text } = data[userIndex];
  const handleFR = (direction) => {
    if (direction === "Forward") {
      if (userIndex === data.length - 1) setUserIndex(0);
      else setUserIndex(userIndex + 1);
    } else if (direction === "Reward") {
      if (userIndex === 0) {
        setUserIndex(data.length - 1);
      } else setUserIndex(userIndex - 1);
    }
  };
  const randomUserIndex = function () {
    const index = Math.round(Math.random() * (data.length - 1 - 0));
    setUserIndex(index);
  };
  return (
    <>
      <main>
        <section className="container">
          <h2 className="title">Our Reviews</h2>
          <div className="underline"></div>
        </section>
        <article className="review">
          <div className="img-container">
            <img src={image} className="person-img" />
          </div>
          <h4>{name}</h4>
          <h3 className="job">{job}</h3>
          <p className="info">{text}</p>
          <div>
            <button
              className="prev-btn"
              onClick={() => {
                handleFR("Reward");
              }}
            >
              <BsChevronLeft />
            </button>
            <button
              className="next-btn"
              onClick={() => {
                handleFR("Forward");
              }}
            >
              <BsChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomUserIndex}>
            surprise me
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
