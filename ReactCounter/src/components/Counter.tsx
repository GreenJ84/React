import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.module.css";
import { decrement, increment, incrementByAmount } from '../slices/counterSlice'


interface counterType{
  counter: { value: number}
}

const Counter = () => {
  const [toggle, setToggle] = useState(false)
  const counter = useSelector((state: counterType)  => state.counter.value);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    if(toggle){
      setToggle(false)
    } else{
      setToggle(true)
    }
  };

  const incrementHandler = () => {
    dispatch(increment());
  };
  
  const randomChangeHandler = () => {
    let x = Math.ceil(Math.random()*10)
    dispatch(incrementByAmount(x));
  };

  const decrementHandler = () => {
    dispatch(decrement())
  };

  return (
      <main className='counter'>
        <h1>Redux Counter</h1>
        <div className='value'>
          { counter }
        </div>
        <div style={{display:toggle ? 'block':'none'}}>
          <button onClick={incrementHandler}>
            Increment
          </button>
          <button onClick={randomChangeHandler}>
            Random Change
          </button>
          <button onClick={decrementHandler}>
            Decrement
          </button>
        </div>
        <button onClick={toggleCounterHandler}>
          Toggle Counter
        </button>
      </main>
  );
};

export default Counter;
