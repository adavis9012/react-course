const appRoot = document.getElementById('app');

const showDetailsToogle = (e) => {
    e.preventDefault();
    visibility = !visibility;
    renderTemplate();
}
let visibility = false;

const renderTemplate = () => {
    const template = (
        <article>
            <h1>Visibility Toogle</h1>
            <form onSubmit={showDetailsToogle}>
                <button>{visibility ? 'Hide details' : 'Show details'}</button>
            </form>
            {visibility && <p>Fugiat eu amet fugiat adipisicing dolore.</p>}
        </article>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();
