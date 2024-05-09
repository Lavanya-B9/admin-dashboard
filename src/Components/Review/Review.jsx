import React from "react";
import "./Review.css";
import { UpdatesData } from "../Data/Data";

const Review = () => {
  return (
    <div className="review">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="user-thumbnail" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.notification}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
