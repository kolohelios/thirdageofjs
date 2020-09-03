import * as React from 'https://cdn.skypack.dev/react@^16.13.1';
import * as ReactDom from 'https://cdn.skypack.dev/react-dom@^16.13.1';
import htm from 'https://cdn.skypack.dev/htm@^3.0.4';
import Header from '/components/Header/index.js';

const { createElement } = React;
const render = ReactDom.render;
const html = htm.bind(createElement);

render(html`<${Header}/>`, document.getElementById('root'));
