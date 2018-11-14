React Course By Andrew Mead - <small>Student David Velandia</small>

Table of contents
=================

* [ 01-Indecision App](#h1-01-indecision-app)
    * [Steps](#h2-steps)
* [ 02-Indecision App](#h1-02-indecision-app)
    * [Steps](#h2-steps)
* [ 03-Indecision App](#h1-03-indecision-app)
    * [Steps](#h2-steps)


# 01-Indecision App (Templates)
## Steps
```shell
cd 01-indecision-app
npm i -g live-server
npm i -g babel-cli
npm i -s babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
# 02-Indecision App (Components - Class)
## Steps
```shell
cd 02-indecision-app
npm i -g live-server
npm i -g babel-cli
npm i -s babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
# 03-Indecision App (Stateless Functional Components)
## Steps
```shell
cd 03-indecision-app
npm i -g live-server
npm i -g babel-cli
npm i -s babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

# 04-Indecision App (Webpack)
## Class properties
With `plugin-proposal-class-properties` is not longer required use constructor
```javascript
class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGretting = this.getGretting.bind(this);
    }
    getGretting() {
        return `Hello ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const oldGretting = oldSyntax.getGretting;
console.log('oldGretting:', oldGretting());

class NewSyntax {
    name = 'Jen';
    getGretting = () => {
        return `Hello ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGretting = newSyntax.getGretting;
console.log('newGretting:', newGretting());
```

# 05-Indecision App (Using Third Party Component)
Passing children to component
```javascript
    const Layout = (props) => {
        return (
            <div>
                <p>Header</p>
                    {props.children}
                <p>Footer</p>
            </div>
        );
    };

    const Template = () => {
        return (
            <div>
                <h1>Hey ho!</h1>
            </div>
        );
    };

    ReactDOM.render((
        <Layout>
            <Template/>
        </Layout>
    ), document.getElementById('app'));
```
## BEM convention
Block Element Modifier
http://getbem.com/introduction/
```css
.block__element {
    font-weight: 300;
}
.block--modifier {
    font-weight: 300;
}
```

# 06-Expensify App (React-Router)
https://reacttraining.com/react-router/

## Weback-config
historyApiFallback: true