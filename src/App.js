import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/option" element={<Option />} /> */}
        {/* <Route path="/:roomID" element={<Game />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
