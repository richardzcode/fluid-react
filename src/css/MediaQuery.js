import React, { Component } from 'react';

import { JS } from 'fsts';

import MediaQuery from '../mq';

export function withMediaQuery(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = { style: props.style };
        }

        componentDidMount() {
            const { style } = this.props;
            if (!style) { return; }

            MediaQuery.attach(style, (new_style) => {
                this.setState({ style: new_style });
            });
        }

        componentWillUnmount() {
            const { style } = this.props;
            if (!style) { return; }

            MediaQuery.detach(style);
        }

        render() {
            const { style } = this.state;
            const p = JS.lessProps(this.props, 'style');
            const styl = JS.lessProps(style, '@media.*');
            return <Comp {...p} style={styl} />
        }
    }
}
