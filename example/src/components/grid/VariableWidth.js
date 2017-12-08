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
            <Col>1 of 3</Col>
            <Col xs="auto">variable width content</Col>
            <Col>1 of 3</Col>
        </Row>
    </Container>
`

const VariableWidth = (props) => (
    <Panel>
        <H3>Variable Width</H3>
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="auto">variable width content</Col>
                <Col>1 of 3</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default VariableWidth;
