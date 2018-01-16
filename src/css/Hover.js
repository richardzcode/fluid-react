import React, { Component, Fragment } from 'react';
import { JS } from 'fsts';

export function withHover(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
            this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);

            this.state = { hover: false }
        }

        mouseEnterHandler() {
            this.setState({ hover: true });
        }

        mouseLeaveHandler() {
            this.setState({ hover: false });
        }

        render() {
            let style = this.props.style;
            if (!style || !style[':hover']) {
                return <Comp {...this.props}>{this.props.children}</Comp>
            }
            
            const { hover } = this.state;
            const p = JS.lessProps(this.props, 'style');
            if (hover) {
                style = style[':hover'];
            } else {
                style = JS.lessProps(style, ':hover');
            }
            return (
                <Comp
                    {...p}
                    style={style}
                    onMouseEnter={this.mouseEnterHandler}
                    onMouseLeave={this.mouseLeaveHandler}
                >
                    {this.props.children}
                </Comp>
            )
        }
    }
}
