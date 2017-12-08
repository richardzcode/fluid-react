import React from 'react';

import { withMediaQuery } from 'fluid-react';

import { Bootstrap } from '../theme';

const _Section = (props) => (
    <div {...props}>{props.children}</div>
)
const Section = withMediaQuery(_Section, Bootstrap.section);

const _Panel = (props) => (
    <div {...props}>{props.children}</div>
)
const Panel = withMediaQuery(_Panel, Bootstrap.panel);

const _Block = (props) => (
    <div {...props}>{props.children}</div>
)
const Block = withMediaQuery(_Block, Bootstrap.block);

export {
    Section,
    Panel,
    Block
};
