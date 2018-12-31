import { createStore, combineReducers } from 'redux';

const defaultExpensesReducer = [];

const expensesReducer = (state = defaultExpensesReducer, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

const defaultFilterReducer = {
  text: 'rent',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = defaultFilterReducer, action) => {
  switch (action.type) {
    default:
      return state;
  };
} 

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filter: filterReducer
}));

const demoState = {
  expenses: [
    {
      id: 'asdpsa',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0 
    }
  ],
  filters : {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

console.log(store.getState());