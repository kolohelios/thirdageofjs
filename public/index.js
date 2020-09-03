import * as React from 'https://cdn.skypack.dev/react@^16.13.1';
import * as ReactDom from 'https://cdn.skypack.dev/react-dom@^16.13.1';
import htm from 'https://cdn.skypack.dev/htm@^3.0.4';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';
import Header from '/components/Header/index.js';
import Footer from '/components/Footer/index.js';
import About from '/views/About/index.js';
import Home from '/views/Home/index.js';

const { createElement, useEffect, useState } = React;
const render = ReactDom.render;
const html = htm.bind(createElement);

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

const Views = {
    About,
    Home,
};

const Content = () => {
    const [currentView, setCurrentView] = useState(location.hash.replace('#', '') || 'Home');

    const removeHash = () => {
        history.pushState(
            '',
            document.title, window.location.pathname + window.location.search,
        );
    }

    const updateView = event => {
        const newView = event.target.location.hash.replace('#', '');
        removeHash();

        if (!newView) { return; }

        if (!Views[newView]) {
            console.warn(`View ${newView} does not exist.`);
            return;
        }

        setCurrentView(newView);
    }

    useEffect(() => {
        window.addEventListener('hashchange', updateView, false);

        return () => window.removeEventListener('hashChange', updateView);
    }, []);

    return html`<${Views[currentView]}/>`;
}

render(html`<${Page}>
    <${Header}/>
    <${Content}/>
    <${Footer}/>
<//>`, document.getElementById('root'));
