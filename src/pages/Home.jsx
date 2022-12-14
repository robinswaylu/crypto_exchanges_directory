import styles from '../styles';
import { Hero, ExchangesList } from '../components';

const Home = () => {
  return (
    <div className={`${styles.flexStart} mb-16`}>
      <div className={`${styles.boxWidth}`}>
        {/* Start Homepage Hero section */}
        <Hero />
        {/* Start Exchanges List section */}
        <ExchangesList />
      </div>
    </div>
  );
};

export default Home;
