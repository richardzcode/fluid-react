import React from 'react';

import {
    Panel,
    Block,
    Code,
    H3
} from '../../bootstrap';

const source = `
    const responsiveColor = {
        padding: '2rem',
        color: '#fff',
        backgroundColor: '#0275d8',
        borderColor: '#0275d8',
        '@media (min-width: 576px) and (max-width: 767px)': {
            backgroundColor: '#5cb85c',
            borderColor: '#5cb85c'
        },
        '@media (min-width: 768px) and (max-width: 991px)': {
            backgroundColor: '#5bc0de',
            borderColor: '#5bc0de'
        },
        '@media (min-width: 992px) and (max-width: 1199px)': {
            backgroundColor: '#f0ad4e',
            borderColor: '#f0ad4e'
        },
        '@media (min-width: 1200px)': {
            backgroundColor: '#d9534f',
            borderColor: '#d9534f'
        }
    };

    const ResponsiveBlock = (props) => (
        <Block style={responsiveColor}>Color changes with width</Block>
    )
`

const responsiveColor = {
    padding: '2rem',
    color: '#fff',
    backgroundColor: '#0275d8',
    borderColor: '#0275d8',
    '@media (min-width: 576px) and (max-width: 767px)': {
        backgroundColor: '#5cb85c',
        borderColor: '#5cb85c'
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
        backgroundColor: '#5bc0de',
        borderColor: '#5bc0de'
    },
    '@media (min-width: 992px) and (max-width: 1199px)': {
        backgroundColor: '#f0ad4e',
        borderColor: '#f0ad4e'
    },
    '@media (min-width: 1200px)': {
        backgroundColor: '#d9534f',
        borderColor: '#d9534f'
    }
};

const ResponsiveStyle = (props) => (
    <Panel>
        <H3>Responsive Style</H3>
        <Block style={responsiveColor}>Color changes with width</Block>
        <Code source={source} />
    </Panel>
)

export default ResponsiveStyle;
