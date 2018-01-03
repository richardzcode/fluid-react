import React, { Component } from 'react';

import { JS, Device } from 'fsts';

import MediaQuery from '../media';

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
            const hasWindow = Device.hasWindow();

            if (this._style) { MediaQuery.detach(this._style); }

            this._style = Object.assign({}, this.props.style);
            if (hasWindow) {
                this.setState({ style: this._style });
            }

            return MediaQuery.attach(this._style, (new_style) => {
                this.setState({ style: new_style });
            });
        }

        render() {
            const hasWindow = Device.hasWindow();

            const { className } = this.props;
            const style = hasWindow? this.state : this.attachStyle();
            const cls = [].concat(className || [])
                .concat(style['__fr_class__'] || []);
            const styl = JS.lessProps(style, '@media.*');
            const p = JS.lessProps(this.props, ['style', 'className']);
            return <Comp {...p} style={styl} className={cls.join(' ')} />
        }
    }
}
