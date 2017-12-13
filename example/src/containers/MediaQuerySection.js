import React, { Component } from 'react';

import { Container, Row, Col } from 'fluid-react';

import { Section } from '../bootstrap';

import Sidebar from './Sidebar';

import {
    ResponsiveStyle
} from '../components/mediaquery';

export default class MediaQuerySection extends Component {
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);

        this.state = {
            active: 'responsive_style'
        }
    }

    activate(name) {
        this.setState({ active: name });
    }

    render() {
        const { active } = this.state;
        const items = [
            { name: 'responsive_style', title: 'Responsive Style' }
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
                            { active === 'responsive_style'? <ResponsiveStyle /> : null }
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}
