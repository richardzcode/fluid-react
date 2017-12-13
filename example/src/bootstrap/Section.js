import React from 'react';

import { Div, Pre } from 'fluid-react';
import { JS } from 'fsts';

import { Bootstrap } from '../theme';

const Section = (props) => (
    <Div {...props} style={Bootstrap.section}>{props.children}</Div>
)

const Panel = (props) => (
    <Div {...props} style={Bootstrap.panel}>{props.children}</Div>
)

const Block = (props) => (
    <Div {...props} style={Bootstrap.block}>{props.children}</Div>
)

const Code = (props) => {
    const { source } = props;
    const p = JS.lessProps(props, 'source');
    return (
        <Pre {...p} style={Bootstrap.code}>{source}</Pre>
    )
}

const H1 = (props) => (
    <Div {...props} style={Bootstrap.h1}>{props.children}</Div>
)

const H2 = (props) => (
    <Div {...props} style={Bootstrap.h2}>{props.children}</Div>
)

const H3 = (props) => (
    <Div {...props} style={Bootstrap.h3}>{props.children}</Div>
)

export {
    Section,
    Panel,
    Block,
    Code,

    H1,
    H2,
    H3
};
