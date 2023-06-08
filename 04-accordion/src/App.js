import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <div className="header">
            <h3>Question And Answer About Login</h3>
          </div>
          <div>
            {data.map((question) => {
              return <Question question={question} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
