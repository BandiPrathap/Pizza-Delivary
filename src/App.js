import React, { useEffect } from "react";
import LandingPage from "./pages/WellcomePage";
import "./App.css";

function App() {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log("hello world");
    }, 1000);

    return () => clearInterval(timeOut);
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
