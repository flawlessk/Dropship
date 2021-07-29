import './Counter.css';
import { useDispatch } from 'react-redux';
import { decreaseCounter } from '../../../../redux/action-types/actionTypes';

const Minus = ({ productId }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="minus"
      onClick={() => {
        dispatch(decreaseCounter(productId));
      }}
    >
      -
    </button>
  );
};

export default Minus;
