import React from "react";
import "./Cards.css";
import { cardData } from "../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="cards">
      {cardData.map((card, id) => {
        return (
          <div className="parent-container" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
