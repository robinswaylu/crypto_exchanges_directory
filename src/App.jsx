import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExchangeDetail from './pages/ExchangeDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange/:id" element={<ExchangeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
