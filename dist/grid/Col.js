var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';

import { Logger, JS } from 'fsts';

import MediaQuery from '../MediaQuery';
import FluidStyle from '../FluidStyle';

const logger = new Logger('Col');

export default class Col extends Component {
    constructor(props) {
        super(props);

        this.onBreakpoint = this.onBreakpoint.bind(this);

        this.state = {
            vw: 'xs'
        };
    }

    cellCount() {
        const { vw } = this.state;
        const { xs, sm, md, lg, xl } = this.props;
        const index = {
            xs: 0,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4
        }[vw];
        const counts = [JS.undefinedThen(xs, -1), JS.undefinedThen(sm, -1), JS.undefinedThen(md, -1), JS.undefinedThen(lg, -1), JS.undefinedThen(xl, -1)];

        if (counts[index] !== -1) {
            return counts[index];
        }
        for (var i = index - 1; i >= 0; i--) {
            if (counts[i] !== -1) {
                return counts[i];
            }
        }
        for (var i = index + 1; i < 5; i++) {
            if (counts[i] !== -1) {
                return counts[i];
            }
        }

        return '';
    }

    calcStyle() {
        const count = this.cellCount();
        return FluidStyle['col' + count];
    }

    componentDidMount() {
        MediaQuery.listenBreakpoint(this.onBreakpoint);
    }

    componentWillUnmount() {
        MediaQuery.unlistenBreakpoint(this.onBreakpoint);
    }

    onBreakpoint(vw) {
        logger.debug('on breakpoint ' + vw);
        this.setState({ vw: vw });
    }

    render() {
        const { style } = this.props;
        const styl = Object.assign({}, style, this.calcStyle());
        const p = JS.lessProps(this.props, 'style');
        return React.createElement(
            'div',
            _extends({ className: 'fluid-react-col', style: styl }, p),
            this.props.children
        );
    }
}