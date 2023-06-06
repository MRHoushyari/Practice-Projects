// import React, { useState } from 'react';
import { useState } from "react";
const Tour = ({ tour, handleRemove }) => {
  const [tourDetail, setTourDetail] = useState("... Read More");
  const [detailShow, setDetailShow] = useState(300);
  return (
    <>
      <div className="tourContainer">
        <img src={tour.image} alt={tour.name} />
        <div className="tourTitle">
          <span>{tour.name}</span>
          <span className="price">$ {tour.price}</span>
        </div>
        <div className="tourDetail">
          {tour.info.substring(0, detailShow)}
          <button
            classname="showButton"
            onClick={() => {
              if (tourDetail === "... Read More") {
                setTourDetail("... Show Less");
                setDetailShow(tour.info.length);
              } else {
                setTourDetail("... Read More");
                setDetailShow(300);
              }
            }}
          >
            {tourDetail}{" "}
          </button>
          <div className="removeContainer">
            <button
              className="removeButton"
              onClick={() => {
                handleRemove(tour.id);
              }}
            >
              Not Interest
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
