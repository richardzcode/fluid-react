import React from 'react';
import { JS } from 'fsts';

import {
    Container as GContainer,
    Row as GRow,
    Col as GCol,
    W100 as GW100
} from 'fluid-react';

const GridStyle = {
    container: {
        padding: '1.5rem',
        borderWidth: '.2rem',
        border: 'solid #f7f7f9'
    },
    row: {
        margin: '0.5rem auto',
        backgroundColor: 'rgba(255,0,0,.1)'
    },
    col: {
        padding: '.75rem 15px',
        backgroundColor: 'rgba(86,61,124,.15)',
        border: '1px solid rgba(86,61,124,.2)',
        maxHeight: '5rem'
    }
}

export const Container = (props) => (
    <GContainer
        {...(JS.lessProps(props, 'style'))}
        style={Object.assign({}, GridStyle.container, props.style)}
    >
        {props.children}
    </GContainer>
)

export const Row = (props) => (
    <GRow
        {...(JS.lessProps(props, 'style'))}
        style={Object.assign({}, GridStyle.row, props.style)}
    >
        {props.children}
    </GRow>
)

export const Col = (props) => (
    <GCol
        {...(JS.lessProps(props, 'style'))}
        style={Object.assign({}, GridStyle.col, props.style)}
    >
        {props.children}
    </GCol>
)

export const W100 = (props) => (
    <GW100
        {...(JS.lessProps(props, 'style'))}
        style={Object.assign({}, GridStyle.w100, props.style)}
    >
        {props.children}
    </GW100>
)
