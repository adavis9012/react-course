'use strict';

var appRoot = document.getElementById('app');

var showDetailsToogle = function showDetailsToogle(e) {
    e.preventDefault();
    visibility = !visibility;
    renderTemplate();
};
var visibility = false;

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'article',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toogle'
        ),
        React.createElement(
            'form',
            { onSubmit: showDetailsToogle },
            React.createElement(
                'button',
                null,
                visibility ? 'Hide details' : 'Show details'
            )
        ),
        visibility && React.createElement(
            'p',
            null,
            'Fugiat eu amet fugiat adipisicing dolore.'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();
