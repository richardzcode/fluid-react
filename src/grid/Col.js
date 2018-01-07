import React, { Component } from 'react'

import { Logger, JS, Device } from 'fsts';

import MediaQuery from '../media';
import GridStyle from './GridStyle';

const logger = new Logger('Col');

export default class Col extends Component {
    constructor(props) {
        super(props);

        this.onBreakpoint = this.onBreakpoint.bind(this);

        this.state = {
            vw: 'xs'
        }
    }

    cellCounts() {
        const { xs, sm, md, lg, xl } = this.props;
        const counts = [
            JS.undefinedThen(xs, ''),
            JS.undefinedThen(sm, ''),
            JS.undefinedThen(md, ''),
            JS.undefinedThen(lg, ''),
            JS.undefinedThen(xl, '')
        ]

        // back fill
        for (var i = 0; i < counts.length; i++) {
            const val = counts[i];
            if (val !== '') {
                for (var j = i - 1; j >= 0; j--) { counts[j] = val; }
                break;
            }
        }

        // forward fill
        for (var i = 1; i < counts.length; i++) {
            if (counts[i] === '') { counts[i] = counts[i - 1]; }
        }

        return counts;
    }

    cellCount() {
        const { vw } = this.state;
        const index = {
            xs: 0,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4
        }[vw]
        const counts = this.cellCounts();
        return counts[index];
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

        let cls = 'fluid-react-col __fr_grid_col__';
        const { col } = this.props;
        if (col) { cls += ' __fr_grid_col_' + col + '__'; }
        const counts = this.cellCounts();
        if (counts[0]) { // cellCounts ensures if there is any number then all should have number
            cls += ' __fr_grid_xs_' + counts[0] + '__';
            cls += ' __fr_grid_sm_' + counts[1] + '__';
            cls += ' __fr_grid_md_' + counts[2] + '__';
            cls += ' __fr_grid_lg_' + counts[3] + '__';
            cls += ' __fr_grid_xl_' + counts[4] + '__';
        }
        return (
            <div className={cls} {...this.props}>
                {this.props.children}
            </div>
        )
    }
}
