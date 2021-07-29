import './Counter.css';
import { useDispatch } from 'react-redux';
import { increaseCounter } from '../../../../redux/action-types/actionTypes';

const Plus = ({ productId }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="plus"
      onClick={() => {
        dispatch(increaseCounter(productId));
      }}
    >
      +
    </button>
  );
};

export default Plus;
