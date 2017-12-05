import React, { Component } from 'react';

import FluidStyle from '../FluidStyle';

export default class W100 extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign({}, style, FluidStyle.w100);
        return React.createElement(
            'div',
            { className: 'fluid-react-w100', style: styl },
            this.props.children
        );
    }
}