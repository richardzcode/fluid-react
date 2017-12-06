import React from 'react';
import { JS } from 'fsts';

import { GridStyle } from '../theme';

import {
    Container as GContainer,
    Row as GRow,
    Col as GCol,
    W100 as GW100
} from 'fluid-react';

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
