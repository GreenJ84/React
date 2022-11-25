import './Auth.module.css';
import { useDispatch } from 'react-redux'
import { login } from '../slices/authSlice';
import { useSelector } from 'react-redux';
import { storeType } from '../app/store';

const Auth = () => {
  const displayForm = useSelector((state: storeType) => state.auth.loginForm);
  const dispatch = useDispatch()

  const loginHandler = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    console.log('loggingIn')
    dispatch(login());
  };

  return (
    <main style={{display: displayForm ? 'block' : 'none'}}>
      <section>
        <form onSubmit={loginHandler}>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
