import React from "react";
import "./Updates.css";
import Review from "../Review/Review";
import CustomerReviews from "../CustomerReviews/CustomerReviews";

const Updates = () => {
  return (
    <div className="updates">
      <div>
        <h3>Updates</h3>
        <Review />
      </div>
      <div>
        <h3>Customer Reviews</h3>
        <CustomerReviews />
      </div>
    </div>
  );
};

export default Updates;
