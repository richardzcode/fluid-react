import React, { Component } from 'react';

import { JS } from 'fsts';

import GridStyle from './GridStyle';

export default class Row extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign(
            {},
            style,
            GridStyle.row
        );
        const p = JS.lessProps(this.props, 'style');
        return (
            <div className="fluid-react-row" style={styl} {...p}>
                {this.props.children}
            </div>
        )
    }
}
