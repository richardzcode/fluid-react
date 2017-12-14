import React, { Component } from 'react';

import { Container, Row, Col } from 'fluid-react';

import { Section } from '../bootstrap';

import Sidebar from './Sidebar';

import {
    Listener,
    MatchEl
} from '../components/match';

export default class MatchSection extends Component {
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);

        this.state = {
            active: 'match'
        }
    }

    activate(name) {
        this.setState({ active: name });
    }

    render() {
        const { active } = this.state;
        const items = [
            { name: 'match', title: 'Match' },
            { name: 'listener', title: 'Listener' }
        ];
        return (
            <Section>
                <Container>
                    <Row>
                        <Col xs="12" md="3">
                            <Sidebar
                                activate={this.activate}
                                items={items}
                            />
                        </Col>
                        <Col xs="12" md="9">
                            { active === 'match'? <MatchEl /> : null }
                            { active === 'listener'? <Listener /> : null }
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}
