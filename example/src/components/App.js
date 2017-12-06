import React from 'react';

import { AppStyle } from '../theme';

export const H3 = (props) => (
    <h3 style={AppStyle.h3}>{props.children}</h3>
)

export const Intro = (props) => (
    <p style={AppStyle.intro}>{props.children}</p>
)
