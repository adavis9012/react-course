// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndesitionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

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