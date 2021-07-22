import './Logout.css';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const performLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <input
      className="logout"
      type="button"
      value="Logout"
      onClick={performLogout}
    />
  );
};
export default Logout;
