import React from "react";
import "./CustomerReviews.css";
import Chart from "react-apexcharts";

const CustomerReviews = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colrs: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/mm/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00:000Z",
          "2018-09-19T01:00:00:000Z",
          "2018-09-19T02:00:00:000Z",
          "2018-09-19T03:00:00:000Z",
          "2018-09-19T04:00:00:000Z",
          "2018-09-19T05:00:00:000Z",
          "2018-09-19T06:00:00:000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <div className="customer-reviews">
      <Chart series={data.series} options={data.options} type="area" />
    </div>
  );
};

export default CustomerReviews;
