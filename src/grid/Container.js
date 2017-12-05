import React, { Component } from 'react';

import { JS } from 'fsts';

import FluidStyle from '../FluidStyle';

export default class Container extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign(
            {},
            style,
            FluidStyle.container
        );
        const p = JS.lessProps(this.props, 'style');
        return (
            <div className="fluid-react-container" style={styl} {...p}>
                {this.props.children}
            </div>
        )
    }
}
