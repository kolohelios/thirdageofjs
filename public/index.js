import * as React from 'https://cdn.skypack.dev/react@^16.13.1';
import * as ReactDom from 'https://cdn.skypack.dev/react-dom@^16.13.1';
import htm from 'https://cdn.skypack.dev/htm@^3.0.4';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';
import Header from '/components/Header/index.js';
import Footer from '/components/Footer/index.js';

const { createElement } = React;
const render = ReactDom.render;
const html = htm.bind(createElement);

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

const Content = () => {
    switch (true) {
        default:
            return null;
    }
}

render(html`<${Page}>
    <${Header}/>
    <${Content}/>
    <${Footer}/>
<//>`, document.getElementById('root'));
