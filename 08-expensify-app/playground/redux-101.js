import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decreaceBy = 1} = {}) => ({
    type: 'DECREMENT',
    decreaceBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count: 100 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decreaceBy };
    case "RESET":
      return { count: 0 };
    case "SET":
        return {count: action.count};
    default:
      return state;
  }
});

// Subscribe returns the function Unsubscribe
store.subscribe(() => {
  // Subscribe runs in every store change
  console.log(store.getState());
});

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decreaceBy: 2 }));

store.dispatch(setCount({ count: 18 }));

store.dispatch(decrementCount({ decreaceBy: 2 }));