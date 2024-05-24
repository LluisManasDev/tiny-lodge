import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import "./MainPage.css";

function MainPage({ onSearch }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleSearchClick = () => {
    onSearch(startDate, endDate);
  };

  return (
    <div className="main-page">
      <Navbar isOpen={navOpen} />
      <div className="burger-icon" onClick={() => setNavOpen(!navOpen)}>
        <FaBars />
      </div>
      <div className="input-container">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Start Date"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date"
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default MainPage;
