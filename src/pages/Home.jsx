import React from 'react';
import styles from '../styles';
import { Hero, ExchangesList } from '../components';

const Home = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Start Homepage hero section */}
        <Hero />
        {/* Start Exchanges List section */}
        <ExchangesList />
      </div>
    </div>
  );
};

export default Home;
