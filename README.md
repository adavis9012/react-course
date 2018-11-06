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
```
cd 01-indecision-app
npm i -g live-server
npm i -g babel-cli
npm i -s babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
# 02-Indecision App (Components - Class)
## Steps
```
cd 02-indecision-app
npm i -g live-server
npm i -g babel-cli
npm i -s babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
# 03-Indecision App (Stateless Functional Components)
## Steps
```
cd 03-indecision-app
npm i -g live-server
npm i -g babel-cli
npm i -s babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

#04-Indecision App (Webpack)
## Class properties
With `plugin-proposal-class-properties` is not longer required use constructor
```
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