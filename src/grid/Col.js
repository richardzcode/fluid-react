import React, { Component } from 'react'

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
        }
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
        }[vw]
        const counts = [
            JS.undefinedThen(xs, -1),
            JS.undefinedThen(sm, -1),
            JS.undefinedThen(md, -1),
            JS.undefinedThen(lg, -1),
            JS.undefinedThen(xl, -1)
        ]

        if (counts[index] !== -1) { return counts[index]; }
        for (var i = index - 1; i >= 0; i--) {
            if (counts[i] !== -1) { return counts[i]; }
        }
        for (var i = index + 1; i < 5; i++) {
            if (counts[i] !== -1) { return counts[i]; }
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
        const styl = Object.assign(
            {},
            style,
            this.calcStyle()
        );
        return (
            <div className="fluid-react-col" style={styl}>
                {this.props.children}
            </div>
        )
    }
}
