import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { facebook, twitter } from '../assets';
import Loading from './Loading';
import BackToHomeArrow from './BackToHomeArrow';
import styles from '../styles';

const ExchangeDetail = () => {
  const { id } = useParams();
  const { response, loading } = useAxios(`/exchanges/${id}`);

  if (loading) {
    return (
      <section className={`${styles.section}`}>
        <Loading className="h-8 w-32" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2 mb-10" />
      </section>
    );
  }

  if (!response) {
    return (
      <section className={`${styles.section} text-white`}>
        <p className="errorMessage">
          Error: exchange information not available at the moment. Please try
          again later.
        </p>
      </section>
    );
  }

  return (
    <section className={`flex flex-col ${styles.padding} text-white`}>
      <BackToHomeArrow />
      <div className="flex flex-col sm:flex-row items-center pt-36 justify-between ">
        <div className="flex gap-4 items-center">
          <img src={response.image} alt={response.name} />
          <h1 className="text-white text-3xl font-bold exchangeName">
            {response.name}
          </h1>
        </div>
        <div className="flex flex-col mt-6 sm:mt-0">
          <span className="text-center text-3xl font-bold text-secondary trustScoreRank">
            {response.trust_score_rank}
          </span>
          <p className="font-semibold">Trust score rank </p>
        </div>
      </div>

      {/* eslint-disable */}
      {response.description ? (
        <p
          className={` ${styles.paragraph} mt-6 pb-6 [&>a]:text-secondary [&>a]:underline`}
          dangerouslySetInnerHTML={{ __html: response.description }}
        />
      ) : (
        <p className={` ${styles.paragraph}  mt-6 pb-6`}>
          {response.name} does not have description at the moment. Please visit
          their offical website for more information:{' '}
          <a
            className="text-secondary underline"
            href={response.url}
            target="_blank"
          >
            {response.url}
          </a>
        </p>
      )}

      {/* eslint-enable */}

      <p>
        <span className="font-bold">Country:</span>{' '}
        {response.country ? response.country : `N/A`}
      </p>
      <p>
        <span className="font-bold">Year of Establishment:</span>{' '}
        {response.year_established ? response.year_established : `N/A`}
      </p>
      <div className="flex mt-6 gap-4">
        {/* 
          TODO: handle link error, 
                create social media links component that takes social media urls as props
        */}
        {response.twitter_handle ? (
          <img
            role="presentation"
            src={twitter}
            alt={`${response.name} twitter page`}
            className="w-[30px] h-[30px] cursor-pointer hover:animate-pulse"
            onClick={() =>
              window.open(`https://twitter.com/${response.twitter_handle}`)
            }
          />
        ) : null}

        {/* TODO: handle link error */}
        {response.facebook_url ? (
          <img
            role="presentation"
            src={facebook}
            alt={`${response.name} facebook page`}
            className="w-[30px] h-[30px] cursor-pointer hover:animate-pulse"
            onClick={() => window.open(response.facebook_url)}
          />
        ) : null}

        {/* OPTIONAL: reddit, telegram, slack, and other url are available upon request */}
      </div>
    </section>
  );
};

export default ExchangeDetail;
