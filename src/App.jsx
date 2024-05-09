import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainSection from "./Components/MainSection/MainSection";
import Updates from "./Components/Updates/Updates";

const App = () => {
  return (
    
    <div className="App">
      <div className="app-glass">
        <Sidebar />
        <MainSection />
        <Updates />
      </div>
    </div>
  );
};

export default App;
