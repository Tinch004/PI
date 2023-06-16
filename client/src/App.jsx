import React from 'react';
import { Route, Routes} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import CountryCard from './components/CountryCard';
import DetailPage from './components/DetailPage';
import FormPage from './components/FormPage';
import Home from './components/Home';

const App = () => {
  return (
    
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route  path="/home" element={<Home/>} />
          <Route  path="/detail/:id" element={<DetailPage/>} />
          <Route  path="/form" element={<FormPage/>} />
      </Routes>
   
  );
};

export default App;