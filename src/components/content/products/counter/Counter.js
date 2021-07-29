import './Counter.css';
import Minus from './Minus';
import Plus from './Plus';

const Counter = ({ count, productId }) => {
  return (
    <div className="counter-wrapper">
      <Minus productId={productId} />
      <p>{count}</p>
      <Plus productId={productId} />
    </div>
  );
};

export default Counter;
