import React from 'react';

import { withPseudo } from 'fluid-react';

import {
    Panel,
    Code,
    H3
} from '../../bootstrap';

const source = `
    const brandStyle = {
        fontSize: '24px',
        verticalAlign: 'top',
        padding: '4px',
        '::before': {
            content: '',
            display: 'inline-block',
            width: '64px',
            height: '32px',
            backgroundImage: 'url(https://reactjs.org/logo-og.png)',
            backgroundSize: '64px 32px'
        }
    }

    const BrandName = (props) => (
        <span {...props}>{props.children}</span>
    )

    export const Brand = withPseudo(BrandName);
`
const brandStyle = {
    fontSize: '24px',
    verticalAlign: 'top',
    padding: '4px',
    '::before': {
        content: '',
        display: 'inline-block',
        width: '64px',
        height: '32px',
        backgroundImage: 'url(https://reactjs.org/logo-og.png)',
        backgroundSize: '64px 32px'
    }
}

const BrandName = (props) => (
    <span {...props}>{props.children}</span>
)

export const Brand = withPseudo(BrandName);

const Before = (props) => (
    <Panel>
        <H3>::brefore</H3>
        <Brand style={brandStyle}>React</Brand>
        <Code source={source} />
    </Panel>
)

export default Before;
