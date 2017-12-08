import React from 'react';

import { Container, Row, Col } from './GridWrapper';
import {
    Panel,
    Code,
    H3
} from '../../bootstrap';

const source = `
    <Container>
        <Row>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
        </Row>
    </Container>
`

const EqualWidth = (props) => (
    <Panel>
        <H3>Equal Width</H3>
        <Container>
            <Row>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default EqualWidth;
