import React from "react";
import "./Results.css";

function Results({ startDate, endDate }) {
  return (
    <div className="results">
      <div className="result-item">Start Date: {startDate}</div>
      <div className="result-item">End Date: {endDate}</div>
      {/* Add more divs to display results here */}
    </div>
  );
}

export default Results;
