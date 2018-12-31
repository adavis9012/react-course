import { createStore } from "redux";

const store = createStore((state = { count: 100 }, action) => {
  switch (action.type) {
    case "INCREMENT":
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return { count: state.count + incrementBy };
    case "DECREMENT":
        const decreaceBy = typeof action.decreaceBy === 'number' ? action.decreaceBy : 1;
      return { count: state.count - decreaceBy };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
});

// Subscribe returns the function Unsubscribe
store.subscribe(() => {
  // Subscribe runs in every store change
  console.log(store.getState());
});

store.dispatch({ type: "INCREMENT", incrementBy: 5 });

// unsubscribe();

store.dispatch({ type: "DECREMENT", decreaceBy: 10 });

store.dispatch({ type: "RESET" });

store.dispatch({ type: "DECREMENT", decreaceBy: 2 });
