import { useSelector, useDispatch } from "react-redux";
import "./Counter.module.css";
import { decrement, increment } from '../slices/counterSlice'

interface counterType{
  counter: { value: number}
}

const Counter = () => {
  const counter = useSelector((state: counterType)  => state.counter.value);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    dispatch(increment());
  };

  const decrementCounterHandler = () => {
    dispatch(decrement())
  };

  return (
      <main className='counter'>
        <h1>Redux Counter</h1>
        <div className='value'>
          { counter }
        </div>
        <div>
          <button onClick={incrementCounterHandler}>
            Increment
          </button>
          <button onClick={decrementCounterHandler}>
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
