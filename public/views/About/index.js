import * as React from 'https://cdn.skypack.dev/react@^16.13.1';
import htm from 'https://cdn.skypack.dev/htm@^3.0.4';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

const { createElement, useEffect, useState } = React;
const html = htm.bind(createElement);

const Clock = () => {
    const [timeSince2000, setTimeSince2000] = useState('The year 2000 was...');
    useEffect(() => {
        import('https://cdn.skypack.dev/moment@^2.26.0').then(moment => {
            setTimeSince2000(`The year 2000 was ${moment.default([2000, 0, 1]).fromNow()}`);
        });
    }, []);

    return html`<div>${timeSince2000}</div>`;
}

const Content = styled.div`
    flex: 1;
`;

export default () => html`<${Content}><${Clock}/><//>`;
