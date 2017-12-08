import React from 'react';

import { Container, Row, Col, W100 } from './GridWrapper';
import {
    Panel,
    Code,
    H3
} from '../../bootstrap';

const source = `
    <Container>
        <Row>
            <Col>col</Col>
            <Col>col</Col>
            <W100 />
            <Col>col</Col>
            <Col>col</Col>
        </Row>
    </Container>
`

const MultiRow = (props) => (
    <Panel>
        <H3>Multi-Row</H3>
        <Container>
            <Row>
                <Col>col</Col>
                <Col>col</Col>
                <W100 />
                <Col>col</Col>
                <Col>col</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default MultiRow;
