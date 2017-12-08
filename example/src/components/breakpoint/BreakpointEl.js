import React from 'react';

import { Breakpoint } from 'fluid-react';

import {
    Panel,
    Block,
    Code,
    H3
} from '../../bootstrap';

const source = `
    <Breakpoint show="xs,sm">
        <Block style={blockStyle}>xs,sm</Block>
    </Breakpoint>
    <Breakpoint show="md,lg">
        <Block style={blockStyle}>md,lg</Block>
    </Breakpoint>
    <Breakpoint show="xl">
        <Block style={blockStyle}>xl</Block>
    </Breakpoint>
`

const blockStyle = {
    backgroundColor: '#5bc0de',
}

const BreakpointEl = (props) => (
    <Panel>
        <H3>Breakpoint</H3>
        <Breakpoint show="xs,sm">
            <Block style={blockStyle}>xs,sm</Block>
        </Breakpoint>
        <Breakpoint show="md,lg">
            <Block style={blockStyle}>md,lg</Block>
        </Breakpoint>
        <Breakpoint show="xl">
            <Block style={blockStyle}>xl</Block>
        </Breakpoint>
        <Code source={source} />
    </Panel>
)

export default BreakpointEl;
