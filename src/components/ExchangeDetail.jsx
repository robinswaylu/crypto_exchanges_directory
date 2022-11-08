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
      <section className="text-white flex flex-col sm:pt-24 pt-6 sm:pb-64 pb-40 xl:px-0 sm:px-16 px-6 ">
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
      <div className="wrapper-container mt-8">
        <p>Error: exchange information not available</p>
      </div>
    );
  }

  return (
    <section className="text-white flex flex-col sm:pt-24 pt-6 sm:pb-64 pb-40 xl:px-0 sm:px-16 px-6 ">
      <BackToHomeArrow />
      <div className="flex flex-col sm:flex-row items-center pt-36 justify-between ">
        <div className="flex gap-4 items-center">
          <img src={response.image} alt={response.name} />
          <h1 className="text-white text-3xl font-bold">{response.name}</h1>
        </div>
        <div className="flex flex-col mt-6 sm:mt-0">
          <span className="text-center text-3xl font-bold text-secondary">
            {response.trust_score_rank}
          </span>
          <p className=" font-semibold">Trust score rank </p>
        </div>
      </div>

      {/* eslint-disable */}
      <p
        className={` ${styles.paragraph} mt-6 pb-6 [&>a]:text-blue-600 [&>a]:underline`}
        dangerouslySetInnerHTML={{ __html: response.description }}
      />
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
