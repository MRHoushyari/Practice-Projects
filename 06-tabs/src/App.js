import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
// import data from "./data.js";
import { AiOutlineDoubleRight } from "react-icons/ai";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tabs-project";
////////////////////////////////////////////////////////////////////////////////app function
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState(0);
  ////////////////////////////////////////////////////////////////////////////////app function (firs time)
  // var data;
  useEffect(() => {
    getUserData();
  }, []);
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://course-api.com/react-tabs-project"
      );
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////search function
  function search(nameKey, objectArray) {
    for (let i = 0; i < objectArray.length; i++) {
      if (objectArray[i].company === nameKey) {
        return i;
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////tarnary operato (is loading)
  return isLoading === true ? (
    <div className="loading">
      <h1>IS Loading...</h1>
    </div>
  ) : (
    <>
      <main className="section">
        <h1 className="title">Experience</h1>
        <div className="underline"></div>
        <div className="jobs-center">
          <div className="btn-container">
            {users.map((item) => {
              return (
                <button
                  className="job-btn"
                  onClick={(e) => {
                    setCurrentUser(search(e.target.textContent, users));
                  }}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="job-info">
            <h3>{users[currentUser].title}</h3>
            <h4>{users[currentUser].company}</h4>
            <p>{users[currentUser].dates}</p>
            <div className="job-desc">
              {users[currentUser].duties.map((duty) => {
                return (
                  <>
                    <AiOutlineDoubleRight className="job-icon" />
                    <p>{duty}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
