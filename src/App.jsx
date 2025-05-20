import React from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import BMW from "./Components/Bike/BMW";
import Store from "./Components/Login/Store";
// import About from "./Components/About";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/BMW" element={<BMW />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
