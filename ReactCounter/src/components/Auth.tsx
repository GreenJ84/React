import './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { authType, login } from '../slices/authSlice';

const Auth = () => {
  const dispatch = useDispatch()

  const loginHandler = () => {
    dispatch(login());
  }

  return (
    <main>
      <section>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={ loginHandler }>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
