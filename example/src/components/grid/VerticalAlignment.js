import React from 'react';

import { Container, Row, Col } from './GridWrapper';
import {
    Panel,
    Code,
    H3
} from '../../bootstrap';

const source = `
    <Container>
        <Row style={{minHeight: '8rem', alignItems: 'flex-start'}}>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
        </Row>
        <Row style={{minHeight: '8rem', alignItems: 'center'}}>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
        </Row>
        <Row style={{minHeight: '8rem', alignItems: 'flex-end'}}>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
        </Row>
    </Container>
`

const VerticalAlignment = (props) => (
    <Panel>
        <H3>Vertical Alignment</H3>
        <Container>
            <Row style={{minHeight: '8rem', alignItems: 'flex-start'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
            <Row style={{minHeight: '8rem', alignItems: 'center'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
            <Row style={{minHeight: '8rem', alignItems: 'flex-end'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default VerticalAlignment;
