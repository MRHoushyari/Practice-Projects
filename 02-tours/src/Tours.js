import { useState } from "react";
import Tour from "./Tour";
import data from "./data/data.js";
const Tours = () => {
  const [tours, setTours] = useState(data);
  const handleRemove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length !== 0) {
    return (
      <>
        <h2 className="header">Our Tours</h2>
        {tours.map((tour) => {
          return <Tour tour={tour} handleRemove={handleRemove} />;
        })}
      </>
    );
  } else {
    return (
      <>
        <h2 className="header">No Tours Left</h2>
        <div className="refreshContainer">
          <button
            className="refresh"
            onClick={() => {
              setTours(data);
            }}
          >
            Refresh
          </button>
        </div>
      </>
    );
  }
};

export default Tours;
