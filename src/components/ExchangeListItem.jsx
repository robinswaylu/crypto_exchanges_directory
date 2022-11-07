import { Link } from 'react-router-dom';

const ExchangeListItem = ({ exchange }) => {
  return (
    <Link to={`/exchange/${exchange.id}`}>
      <div className="text-white grid sm:grid-cols-4 p-5 sm:p-6  border-gray-200 border-b hover:bg-gray-100 hover:text-black">
        <div className="flex items-center gap-2 w-full">
          <img className="w-6" src={exchange.image} alt={exchange.name} />
          <p className="font-bold">{exchange.name}</p>
        </div>

        <div>
          <p>{exchange.url}</p>
        </div>

        <div className="sm:text-center">
          {/* add country flag image */}
          <p>{exchange.country ? exchange.country : `n/a`}</p>
        </div>

        <div>
          <p className=" font-semibold">
            Trust score rank: {exchange.trust_score_rank}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ExchangeListItem;
