import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [extended, setExtended] = useState(true);
  return (
    <div className="question">
      <button
        className="btn"
        onClick={() => {
          setExtended(!extended);
        }}
      >
        {extended === false ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      <h4>{question.title}</h4>
      {extended === false ? <p>{question.info}</p> : <p></p>}
    </div>
  );
};

export default Question;
