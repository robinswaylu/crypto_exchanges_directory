import styles from '../styles';
import { heroMessageH1, heroMessageP } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col sm:py-36 py-6">
      <div className={` ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <h1 className={`${styles.heading} mt-5 md:mt-0 fadeinAnimation`}>
          {heroMessageH1.copy}
        </h1>
        <p
          className={`${styles.paragraph} mt-5 md:mt-0 hidden sm:block fadeinAnimation`}
        >
          {heroMessageP.copy}
        </p>
      </div>
    </section>
  );
};

export default Hero;
