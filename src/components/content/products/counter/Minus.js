import './Counter.css';
import { useDispatch } from 'react-redux';
import { decreaseCounter } from '../../../../redux/action-types/actionTypes';

const Minus = ({ productId }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="button"
      className="minus"
      value="-"
      onClick={() => {
        dispatch(decreaseCounter(productId));
      }}
    />
  );
};

export default Minus;
