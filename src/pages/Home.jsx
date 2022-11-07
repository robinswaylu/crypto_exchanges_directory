import React from 'react';
import styles from '../styles';

const Home = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="home" className="flex flex-col sm:py-36 py-6">
          <div
            className={` ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
          >
            <h1 className={`${styles.heading} mt-5 md:mt-0 fadeinAnimation`}>
              Welcome to the Crypto Exchange Directory
            </h1>
            <p className={`${styles.paragraph} mt-5 md:mt-0 fadeinAnimation`}>
              Top 10 Crypto Exchanges
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
