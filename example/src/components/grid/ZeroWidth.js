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
            <Col xs="0" sm="6">1 of 2</Col>
            <Col xs="12" sm="6">2 of 2</Col>
        </Row>
    </Container>
`

const ZeroWidth = (props) => (
    <Panel>
        <H3>Zero Width</H3>
         <Container>
            <Row>
                <Col xs="0" sm="6">1 of 2</Col>
                <Col xs="12" sm="6">2 of 2</Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default ZeroWidth;
