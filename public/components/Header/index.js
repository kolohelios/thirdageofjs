import * as React from 'https://cdn.skypack.dev/react@^16.13.1';
import htm from 'https://cdn.skypack.dev/htm@^3.0.4';
import * as emotion from 'https://cdn.skypack.dev/emotion@^10.0.27';

const { createElement } = React;
const { css } = emotion;
const html = htm.bind(createElement);

const style = css`
    background-color: powderblue;
    height: 45px;
    width: 100%;
`;

export default () => html`<div class=${style}>Header</div>`;
