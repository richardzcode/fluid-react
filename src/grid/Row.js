import React, { Component } from 'react';

import FluidStyle from '../FluidStyle';

export default class Row extends Component {
    render() {
        const { style, align, justify } = this.props;
        const styl = Object.assign(
            {},
            style,
            FluidStyle.row,
            {
                alignItems: align || 'flex-start',
                justifyContent: justify || 'flex-start'
            }
        );
        return (
            <div style={styl}>
                {this.props.children}
            </div>
        )
    }
}
