import React from "react";
import "./MainSection.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainSection = () => {
  return (
    <div className="main">
      <h1>Dashboard</h1>
      <Cards />

      <Table />
    </div>
  );
};

export default MainSection;
