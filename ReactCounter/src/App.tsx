import React from 'react'
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from './components/Auth'
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import { authType } from './slices/authSlice';


const App = () => {
  const loggedIn = useSelector((state: authType) => state.isAuthenticated);


  return (<>
    <Header />
    {loggedIn ? <UserProfile /> : <Auth/>}
    <Counter />
    </>
  );
}

export default App;
