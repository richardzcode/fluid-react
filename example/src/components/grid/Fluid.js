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
            <Col xs="12" sm="6" md="4" lg="3" xl="2">1</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">2</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">3</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">4</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">5</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">6</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">7</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">8</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">9</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">10</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">11</Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">12</Col>
        </Row>
    </Container>
`

const Fluid = (props) => (
    <Panel>
        <H3>Fluid</H3>
        <Container>
            <Row>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">1</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">2</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">3</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">4</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">5</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">6</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">7</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">8</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">9</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">10</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">11</Col>
                <Col xs="12" sm="6" md="4" lg="3" xl="2">12</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default Fluid;
