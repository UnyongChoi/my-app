import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Episode from "./pages/Episode";
import OnGoing from "./pages/OnGoing";

const App:React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/series/:series_id" element={<Series />}></Route>
            <Route path="/series/:series_id/episodes/:episode_id" element={<Episode />}></Route>
            <Route path="*" element={<OnGoing />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
