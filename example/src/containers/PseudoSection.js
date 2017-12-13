import React, { Component } from 'react';

import { Container, Row, Col } from 'fluid-react';

import { Section } from '../bootstrap';

import Sidebar from './Sidebar';

import {
    Before
} from '../components/pseudo';

export default class PsudoSection extends Component {
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);

        this.state = {
            active: 'before'
        }
    }

    activate(name) {
        this.setState({ active: name });
    }

    render() {
        const { active } = this.state;
        const items = [
            { name: 'before', title: '::before' }
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
                            { active === 'before'? <Before /> : null }
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}
