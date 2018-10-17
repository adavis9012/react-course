console.log('App.js is running!');

// JSX - JavaScript XML

const appRoot = document.getElementById('app');
const app = {
    title: 'This is JSX from app.js!',
    subtitle: 'This is some Info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //Prevent Refresh
    const option = e.target.elements.option.value;    
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
}

const removeAllOptions = () => {
    app.options = [];
    renderOptions();
}

const makeDecition = () => {
    const choice = Math.floor(Math.random()*app.options.length);
    alert(app.options[choice]);
}

const renderOptions = () => {
    const optionsDescription = `${(app.options && app.options.length > 0) ? 'Here are your options': 'No options'}: ${app.options.length}`
    let template = (
        <article>
            <h1 id="someId">{app.title}</h1>
            {app.subtitle && <p>app.subtitle</p>}
            <p>{optionsDescription}</p>
            <ol>
                {
                    app.options.map((option,index) => <li key={index}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={removeAllOptions}>Remove All</button>
                <button disabled={app.options.length < 1} onClick={makeDecition}>What Should I do?</button>
            </form>
        </article>
    );
    ReactDOM.render(template, appRoot);
}
renderOptions();

