import './Counter.css';
import { useDispatch } from 'react-redux';
import { increaseCounter } from '../../../../redux/action-types/actionTypes';

const Plus = ({ productId }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="button"
      className="plus"
      value="+"
      onClick={() => {
        dispatch(increaseCounter(productId));
      }}
    />
  );
};

export default Plus;
