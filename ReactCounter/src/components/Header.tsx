import './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout, toggleForm } from '../slices/authSlice'

interface authType {
  isAuthenticated: boolean
  needsLogin: boolean
}

const Header = () => {
  const loggedIn = useSelector((state: authType) => state.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout())
  }

  const toggleLoginForm = () => {
    dispatch(toggleForm())
  }

  return (
    <header>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {loggedIn ? 
            <button onClick={ logoutHandler }>
              Logout
            </button>:
            <button onClick={ toggleLoginForm }>
              Login
            </button>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
