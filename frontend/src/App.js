import React, { useState } from "react";
import MainPage from "./MainPage";
import Results from "./Results";
import "./App.css";

function App() {
  const [dates, setDates] = useState({ startDate: "", endDate: "" });
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (startDate, endDate) => {
    setDates({ startDate, endDate });
    setShowResults(true);
  };

  return (
    <div className="App">
      {showResults ? (
        <Results startDate={dates.startDate} endDate={dates.endDate} />
      ) : (
        <MainPage onSearch={handleSearch} />
      )}
    </div>
  );
}

export default App;
