import * as React from 'https://cdn.skypack.dev/react@^16.13.1';
import htm from 'https://cdn.skypack.dev/htm@^3.0.4';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

const { createElement } = React;
const html = htm.bind(createElement);

const Header = styled.div`
    background-color: powderblue;
    height: 45px;
    width: 100%;
    justify-content: space-between;
    display: flex;
`;

const Link = styled.a``;

export default () => html`<${Header}>
    Header
    <${Link} href="#Home">Home<//>
    <${Link} href="#About">About<//>
<//>`;
