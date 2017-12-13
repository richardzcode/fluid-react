import React, { Component } from 'react';

import { JS } from 'fsts';

import MediaQuery from '../mq';

export function withMediaQuery(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = { style: props.style || {} };
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.props.style !== prevProps.style) {
                this.attachStyle();
            }
        }

        componentDidMount() {
            this.attachStyle();
        }

        componentWillUnmount() {
            MediaQuery.detach(this._style);
        }

        attachStyle() {
            if (this._style) { MediaQuery.detach(this._style); }

            this._style = Object.assign({}, this.props.style);
            this.setState({ style: this._style });

            MediaQuery.attach(this._style, (new_style) => {
                this.setState({ style: new_style });
            });
        }

        render() {
            const { style } = this.state;
            const p = JS.lessProps(this.props, 'style');
            const styl = JS.lessProps(style, '@media.*');
            return <Comp {...p} style={styl} />
        }
    }
}
