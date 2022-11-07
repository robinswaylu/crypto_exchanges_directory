import ExchangeListItem from './ExchangeListItem';
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
    <section id="exchangesList">
      {response &&
        response.map((item) => (
          <ExchangeListItem key={item.id} exchange={item} />
        ))}
    </section>
  );
};

export default ExchangesList;
