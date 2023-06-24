import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import DetailPage from "./components/DetailPage/DetailPage";
import FormPage from "./components/FormPage/FormPage";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path='*' element={<NotFound/>}/>
      
    </Routes>
  );
};

export default App;
