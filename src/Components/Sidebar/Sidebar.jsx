import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "./../../assets/dashboard-logo.jpg";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import { sidebarData } from "../Data/Data";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        style={expanded ? { left: "60%" } : { left: "5%" }}
        className="bars"
        onClick={() => setExpanded(!expanded)}>
        <FaBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}>
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>DashBoard</span>
        </div>

        {/* menu items */}

        <div className="menu">
          {sidebarData.map((menuItem, index) => {
            return (
              <div
                className={
                  selected === index ? "menu-item active " : "menu-item"
                }
                key={index}
                onClick={() => setSelected(index)}>
                <menuItem.icon />
                <span>{menuItem.heading}</span>
              </div>
            );
          })}
          <div className="menu-item">
            <LiaSignOutAltSolid />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
