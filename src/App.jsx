import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exchange from './pages/Exchange';
import { Navbar, Footer } from './components';
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
          <Route path="/exchange/:id" element={<Exchange />} />
        </Routes>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
