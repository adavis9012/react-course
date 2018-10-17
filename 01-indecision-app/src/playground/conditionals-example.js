console.log('App.js is running!');
const user = {
    name: 'Andrew',
    age: 27,
    location: 'Bogota'
}
let template2 = (
    <article>
        <h1>{user.name ? user.name : 'Anonymus'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user)}
        <span>{JSON.stringify(user)}</span>
    </article>
);

function getLocation({location}){
    return location ? <p>Location: {location}</p> : undefined;
}


ReactDOM.render(template2, appRoot);
