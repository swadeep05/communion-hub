import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventListingPage from "./pages/EventListingPage";
import AboutPages from "./pages/AboutPages";  // Changed to AboutPages (the name you used)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListingPage />} />
        <Route path="/aboutpages" element={<AboutPages />} /> {/* Updated the route path */}
      </Routes>
    </Router>
  );
}

export default App;
