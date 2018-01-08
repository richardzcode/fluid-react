import React, { Component, Fragment } from 'react';

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
                return MediaQuery.attach(this._style, (new_style) => {
                    this.setState({ style: new_style });
                });
            }

            const queries = {};
            Object.keys(this._style)
                .filter(key => key.startsWith('@media'))
                .forEach(key => queries[key] = this._style[key]);
            if (Object.keys(queries).length > 0) {
                this._style['__fr_class__'] = '__fr_mq_' + JS.cheapId() + '__';
                this._style['__fr_queries__'] = queries;
            }
            return JS.lessProps(this._style, '@media.*');
        }

        render() {
            if (Device.hasWindow()) {
                const style = this.state;
                const styl = JS.lessProps(style, '@media.*');
                const p = JS.lessProps(this.props, 'style');
                return <Comp {...p} style={styl} />
            }

            const style = this.attachStyle();
            if (!style['__fr_class__']) {
                const p = JS.lessProps(this.props, 'style');
                return <Comp {...p} style={style} />
            }

            const cls = style['__fr_class__'];
            const queries = style['__fr_queries__'];
            const styl = JS.lessProps(style, '__fr.*');
            let css = '.' + cls + JS.styleToCss(styl);
            Object.keys(queries)
                .forEach(key => {
                    css += key + '{'
                        + '.' + cls + JS.styleToCss(queries[key])
                        + '}';
                });

            const p = JS.lessProps(this.props, 'style');
            return (
                <Fragment>
                    <Comp {...p} className={cls} />
                    <style dangerouslySetInnerHTML={{__html: css }}></style>
                </Fragment>
            );
        }
    }
}
