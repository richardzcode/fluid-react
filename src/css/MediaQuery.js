import React, { Component } from 'react';

import { JS } from 'fsts';

import MediaQuery from '../mq';

export function withMediaQuery(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);

            this._style = Object.assign({}, props.style);
            this.state = { style: this._style };
        }

        componentDidMount() {
            MediaQuery.attach(this._style, (new_style) => {
                this.setState({ style: new_style });
            });
        }

        componentWillUnmount() {
            MediaQuery.detach(this._style);
        }

        render() {
            const { style } = this.state;
            const p = JS.lessProps(this.props, 'style');
            const styl = JS.lessProps(style, '@media.*');
            return <Comp {...p} style={styl} />
        }
    }
}
