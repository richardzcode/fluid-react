import React from 'react';

import { Container, Row, Col } from './GridWrapper';
import {
    Panel,
    Code,
    H3
} from '../../bootstrap';

const source = `
    <Container>
        <Row style={{justifyContent: 'flex-start'}}>
            <Col xs="4">One of two columns</Col>
            <Col xs="4">One of two columns</Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
            <Col xs="4">One of two columns</Col>
            <Col xs="4">One of two columns</Col>
        </Row>
        <Row style={{justifyContent: 'space-around'}}>
            <Col xs="4">One of two columns</Col>
            <Col xs="4">One of two columns</Col>
        </Row>
        <Row style={{justifyContent: 'space-between'}}>
            <Col xs="4">One of two columns</Col>
            <Col xs="4">One of two columns</Col>
        </Row>
    </Container>
`

const HorizontalAlignment = (props) => (
    <Panel>
        <H3>Horizontal Alignment</H3>
        <Container>
            <Row style={{justifyContent: 'flex-start'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'center'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'space-around'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'space-between'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default HorizontalAlignment;
