import { Link } from 'react-router-dom';
import { arrow } from '../assets';

const BackToHomeArrow = () => {
  return (
    <Link className="flex items-center hover:animate-pulse" to="/">
      <img
        role="presentation"
        src={arrow}
        alt="back to home arrow"
        className="w-[50px] h-[50px] cursor-pointer"
      />
      <p>Back to home</p>
    </Link>
  );
};

export default BackToHomeArrow;
