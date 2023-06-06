import React, { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./css/main.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(()=>{setIsLoading(false)},2000)
  if (isLoading === true) return <Loading />;
  else return <Tours />;
}

export default App;
