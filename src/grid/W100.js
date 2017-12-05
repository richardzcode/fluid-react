import React, { Component } from 'react';

import { JS } from 'fsts';

import FluidStyle from '../FluidStyle';

export default class W100 extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign(
            {},
            style,
            FluidStyle.w100
        );
        const p = JS.lessProps(this.props, 'style');
        return (
            <div className="fluid-react-w100" style={styl} {...p}>
                {this.props.children}
            </div>
        )
    }
}
