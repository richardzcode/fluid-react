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
            <Col xs="6">2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col xs="5">2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>
`

const OneWidth = (props) => (
    <Panel>
        <H3>Set One Width</H3>
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="6">2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="5">2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default OneWidth;
