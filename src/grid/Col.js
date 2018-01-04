import React, { Component } from 'react'

import { Logger, JS, Device } from 'fsts';

import MediaQuery from '../media';
import GridStyle from './GridStyle';
import GridCss from './GridCss';

const logger = new Logger('Col');

let GridCssRendered = false;

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
        return GridStyle['col' + count];
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
        if (Device.hasWindow()) {
            const { style } = this.props;
            const styl = Object.assign(
                {},
                style,
                this.calcStyle()
            );
            const p = JS.lessProps(this.props, 'style');
            return (
                <div className="fluid-react-col" style={styl} {...p}>
                    {this.props.children}
                </div>
            )
        }

        let cls = 'fluid-react-col';
        const { xs, sm, md, lg, xl } = this.props;
        if (xs) { cls += ' __fr_grid_xs_' + xs + '__'; }
        if (sm) { cls += ' __fr_grid_sm_' + sm + '__'; }
        if (md) { cls += ' __fr_grid_md_' + md + '__'; }
        if (lg) { cls += ' __fr_grid_lg_' + lg + '__'; }
        if (xl) { cls += ' __fr_grid_xl_' + xl + '__'; }
        if (GridCssRendered) {
            return (
                <div className={cls} {...this.props}>
                    {this.props.children}
                </div>
            )
        } else {
            GridCssRendered = true;
            return (
                <span>
                    <GridCss />
                    <div className={cls} {...this.props}>
                        {this.props.children}
                    </div>
                </span>
            )
        }
    }
}
