console.log('App.js is running!');

let count = 0;
const appRoot = document.getElementById('app');
const addOne = () => {count++; renderCounterApp();};
const minusOne = () => {count--; renderCounterApp();};
const reset = () => {count=0; renderCounterApp();};

const renderCounterApp = () => {
    const template3 = (
        <article>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </article>
    );
    ReactDOM.render(template3, appRoot);
};

renderCounterApp();