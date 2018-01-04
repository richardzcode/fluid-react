import React, { Component } from 'react';

import { JS, Device } from 'fsts';

import GridStyle from './GridStyle';
import GridCss from './GridCss';

let GridCssRendered = false;

export default class Row extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign(
            {},
            style,
            GridStyle.row
        );
        const p = JS.lessProps(this.props, 'style');

        if (Device.hasWindow() || GridCssRendered) {
            return (
                <div className="fluid-react-row" style={styl} {...p}>
                    {this.props.children}
                </div>
            )
        }

        GridCssRendered = true;
        return (
            <div className="fluid-react-row" style={styl} {...p}>
                <GridCss />
                {this.props.children}
            </div>
        )
    }
}
