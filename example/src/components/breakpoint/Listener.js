import React, { Component } from 'react';

import { MediaQuery } from 'fluid-react';

import { Row, Col } from '../grid/GridWrapper';
import {
    Panel,
    Block,
    Code,
    H3
} from '../../bootstrap';

const source = `
    const blockStyle = {
        backgroundColor: '#5bc0de',
    }

    const Mobile = (props) => (
        <Block style={blockStyle}>
            No sidebar in Mobile version
        </Block>
    )

    const Desktop = (props) => (
        <Row>
            <Col xs="9" style={blockStyle}>Desktop version</Col>
            <Col>Sidebar</Col>
        </Row>
    )

    class Comp extends Component {
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
            return (
                (version === 'mobile')? <Mobile /> : <Desktop />
            )
        }
    }
`

const blockStyle = {
    backgroundColor: '#5bc0de',
}

const Mobile = (props) => (
    <Block style={blockStyle}>
        No sidebar in Mobile version
    </Block>
)

const Desktop = (props) => (
    <Row>
        <Col xs="9" style={blockStyle}>Desktop version</Col>
        <Col>Sidebar</Col>
    </Row>
)

class Comp extends Component {
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
        return (
            (version === 'mobile')? <Mobile /> : <Desktop />
        )
    }
}

const Listener = (props) => (
    <Panel>
        <H3>Listener</H3>
        <Comp />
        <Code source={source} />
    </Panel>
)

export default Listener;
