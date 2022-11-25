import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { decrement, increment } from '../slices/counterSlice'

const Counter = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    dispatch(increment());
  };

  const decrementCounterHandler = () => {
    dispatch(decrement())
  };

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>
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
