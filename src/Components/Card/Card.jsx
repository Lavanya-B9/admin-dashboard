import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import { IoMdClose } from "react-icons/io";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {expanded ? (
        <ExpandedCard params={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard params={props} setExpanded={() => setExpanded(true)} />
      )}
    </div>
  );
};

//Compact Card
function CompactCard({ params, setExpanded }) {
  return (
    <motion.div
      className="compact-card"
      style={{
        background: params.color.background,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard">
      <div className="radial-bar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        />
        <span>{params.title}</span>
      </div>

      <div className="detail">
        {/* <Png/> */}
        <params.png />
        <span>$ {params.value}</span>

        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// expanded card

function ExpandedCard({ params, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
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
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/mm/yy HH:mm",
        },
      },
      grid: {
        show: true,
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
    },
  };
  return (
    <motion.div
      className="expanded-card"
      style={{
        background: params.color.background,
        boxShadow: params.color.boxShadow,
      }}>
      <div
        style={{
          alignSelf: "flex-end",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          fontSize: 30,
        }}>
        <IoMdClose onClick={setExpanded} />
      </div>
      <span>{params.title}</span>
      <div className="chart-container">
        <Chart series={params.series} type="area" options={data.options} />
      </div>
      <span>last 24 hours</span>
    </motion.div>
  );
}
export default Card;
