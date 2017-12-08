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
            <Col xs="9">
                Level 1: xs-9
                <Row>
                    <Col xs="8" sm="6">
                        Level 2: xs-8, sm-6
                    </Col>
                    <Col xs="4" sm="6">
                        Level 2: xs-4, sm-6
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
`

const Nest = (props) => (
    <Panel>
        <H3>Nest</H3>
        <Container>
            <Row>
                <Col xs="9">
                    Level 1: xs-9
                    <Row>
                        <Col xs="8" sm="6">
                            Level 2: xs-8, sm-6
                        </Col>
                        <Col xs="4" sm="6">
                            Level 2: xs-4, sm-6
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default Nest;
