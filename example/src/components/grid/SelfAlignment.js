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
            <Col style={{ alignSelf: 'flex-start' }}>
                One of three columns
            </Col>
            <Col style={{alignSelf: 'center'}}>
                One of three columns
            </Col>
            <Col style={{alignSelf: 'flex-end'}}>
                One of three columns
            </Col>
        </Row>
    </Container>
`

const SelfAlignment = (props) => (
    <Panel>
        <H3>Self Alignment</H3>
        <Container>
            <Row style={{minHeight: '8rem', alignItems: 'flex-start'}}>
                <Col style={{ alignSelf: 'flex-start' }}>
                    One of three columns
                </Col>
                <Col style={{alignSelf: 'center'}}>
                    One of three columns
                </Col>
                <Col style={{alignSelf: 'flex-end'}}>
                    One of three columns
                </Col>
            </Row>
        </Container>
        <Code source={source} />
    </Panel>
)

export default SelfAlignment;
