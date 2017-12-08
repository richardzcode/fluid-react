import React from 'react';

import { withMediaQuery } from 'fluid-react';
import { JS } from 'fsts';

import { Bootstrap } from '../theme';

const _Code = (props) => {
    const { source } = props;
    const p = JS.lessProps(props, 'source');
    return (
        <pre {...p}>{source}</pre>
    )
}
const Code = withMediaQuery(_Code, Bootstrap.code);


const _H1 = (props) => (
    <div {...props}>{props.children}</div>
)
const H1 = withMediaQuery(_H1, Bootstrap.h1);

const _H2 = (props) => (
    <div {...props}>{props.children}</div>
)
const H2 = withMediaQuery(_H2, Bootstrap.h2);

const _H3 = (props) => (
    <div {...props}>{props.children}</div>
)
const H3 = withMediaQuery(_H3, Bootstrap.h3);

export {
    Code,

    H1,
    H2,
    H3
};
