import React, { Component } from 'react';

import { JS } from 'fsts';

import FluidStyle from '../FluidStyle';

export default class Row extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign(
            {},
            style,
            FluidStyle.row
        );
        const p = JS.lessProps(this.props, 'style');
        return (
            <div className="fluid-react-row" style={styl} {...p}>
                {this.props.children}
            </div>
        )
    }
}
