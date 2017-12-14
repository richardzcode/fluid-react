import React from 'react';

import { Match } from 'fluid-react';

import {
    Panel,
    Block,
    Code,
    H3
} from '../../bootstrap';

const source = `
    <Match show="xs,sm">
        <Block style={blockStyle}>xs,sm</Block>
    </Match>
    <Match show="md,lg">
        <Block style={blockStyle}>md,lg</Block>
    </Match>
    <Match show="xl">
        <Block style={blockStyle}>xl</Block>
    </Match>
`

const blockStyle = {
    backgroundColor: '#5bc0de',
}

const MatchEl = (props) => (
    <Panel>
        <H3>Match</H3>
        <Match show="xs,sm">
            <Block style={blockStyle}>xs,sm</Block>
        </Match>
        <Match show="md,lg">
            <Block style={blockStyle}>md,lg</Block>
        </Match>
        <Match show="xl">
            <Block style={blockStyle}>xl</Block>
        </Match>
        <Code source={source} />
    </Panel>
)

export default MatchEl;
