import React, { Component } from 'react';

import { MediaQuery, withMediaQuery, withPseudo, Breakpoint } from 'fluid-react';
import { Row, Col } from './Grid';
import { CssDemoStyle } from '../theme';

const Panel = (props) => (
    <div {...props} />
)

export const ResponsiveColor = withMediaQuery(Panel);

const blankStyle = {
    backgroundColor: '#fff',
    borderColor: '#fff'
}

const contentStyle = {
    backgroundColor: '#5bc0de',
    borderColor: '#5bc0de',
    minHeight: '5rem',
    margin: '1px'
}

const Mobile = (props) => (
    <Row>
        <Col style={blankStyle}></Col>
        <Col xs="10" style={contentStyle}>
            No sidebar in Mobile version
        </Col>
        <Col style={blankStyle}></Col>
    </Row>
)

const Desktop = (props) => (
    <Row>
        <Col xs="9" style={contentStyle}>
            Desktop version
        </Col>
        <Col style={contentStyle}>
            Sidebar
        </Col>
    </Row>
)

export class MobileDesktop extends Component {
    constructor(props) {
        super(props);

        this.onBreakpoint = this.onBreakpoint.bind(this);

        this.state = {
            version: 'mobile'
        }
    }

    componentDidMount() {
        MediaQuery.listenBreakpoint(this.onBreakpoint);
    }

    componentWillUnmount() {
        MediaQuery.unlistenBreakpoint(this.onBreakpoint);
    }

    onBreakpoint(vw) {
        this.setState({
            version: ['xs', 'sm'].includes(vw)? 'mobile' : 'desktop'
        });
    }

    render() {
        const { version } = this.state;
        return (version === 'mobile')? <Mobile /> : <Desktop />
    }
}

const BrandName = (props) => (
    <span {...props}>{props.children}</span>
)

export const Brand = withPseudo(BrandName);

export const BreakpointBlocks = (props) => (
    <div>
        <Breakpoint style={CssDemoStyle.breakpointBlock} show="xs,sm">xs, sm</Breakpoint>
        <Breakpoint style={CssDemoStyle.breakpointBlock} show="md,lg">md,lg</Breakpoint>
        <Breakpoint style={CssDemoStyle.breakpointBlock} show="xl">xl</Breakpoint>
    </div>
)
