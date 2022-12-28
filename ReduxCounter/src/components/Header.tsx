import './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout, toggleForm } from '../slices/authSlice'
import { storeType } from '../app/store';

const Header = () => {
  const loggedIn = useSelector((state: storeType) => state.auth.isAuthenticated);

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
          {loggedIn ? <>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={ logoutHandler }>
              Logout
            </button>
          </li></>:
          <li>
            <button onClick={ toggleLoginForm }>
              Login
            </button>
          </li>
            }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
