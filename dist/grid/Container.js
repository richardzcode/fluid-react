var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';

import { JS } from 'fsts';

import FluidStyle from '../FluidStyle';

export default class Container extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign({}, style, FluidStyle.container);
        const p = JS.lessProps(this.props, 'style');
        return React.createElement(
            'div',
            _extends({ className: 'fluid-react-container', style: styl }, p),
            this.props.children
        );
    }
}