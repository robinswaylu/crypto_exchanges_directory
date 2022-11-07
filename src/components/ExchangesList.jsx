import ExchangeItem from './ExchangeItem';
import useAxios from '../hooks/useAxios';

const ExchangesList = () => {
  const { response, loading } = useAxios('exchanges?per_page=10&page=1');

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section id="exchnageList" className="">
      {response &&
        response.map((item) => <ExchangeItem key={item.id} exchange={item} />)}
    </section>
  );
};

export default ExchangesList;
