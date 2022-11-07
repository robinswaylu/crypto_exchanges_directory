import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExchangeDetail from './pages/ExchangeDetail';

import { Navbar } from './components';
import styles from './styles';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <BrowserRouter>
        {/* Start Navbar div */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange/:id" element={<ExchangeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
