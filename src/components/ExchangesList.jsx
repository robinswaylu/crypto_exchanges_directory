import ExchangeListItem from './ExchangeListItem';
import useAxios from '../hooks/useAxios';
import Loading from './Loading';

const ExchangesList = () => {
  const { response, loading } = useAxios('exchanges?per_page=10&page=1');

  if (loading) {
    return (
      <section id="exchangesList">
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
