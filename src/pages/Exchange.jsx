import styles from '../styles';
import { ExchangeDetail } from '../components';

const Exchange = () => {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Start ExchangeDetail section */}
        <ExchangeDetail />
      </div>
    </div>
  );
};

export default Exchange;
