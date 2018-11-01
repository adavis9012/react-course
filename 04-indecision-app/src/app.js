import { React } from 'react';
import { ReactDom } from 'react-dom';

const template = React.createElement('p',{}, 'testing 123');
ReactDom.reder(template, document.getElementById('app'));