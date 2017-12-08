import React, { Component } from 'react';

import { Container, Row, Col } from 'fluid-react';

import {
    Section,
    NavSidebar,
    NavSidebarNav,
    NavSidebarItem
} from '../bootstrap';

import {
    Listener,
    BreakpointEl
} from '../components/breakpoint';

const Sidebar = (props) => {
    const { activate } = props;
    const items = [
        { name: 'breakpoint', title: 'Breakpoint' },
        { name: 'listener', title: 'Listener' }
    ].map(item => (
        <NavSidebarItem
            key={item.name}
            onClick={() => activate(item.name)}
        >{item.title}</NavSidebarItem>
    ));
    return (
        <NavSidebar>
            <NavSidebarNav>
                {items}
            </NavSidebarNav>
        </NavSidebar>
    )
}

export default class BreakpointSection extends Component {
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);

        this.state = {
            active: 'breakpoint'
        }
    }

    activate(name) {
        this.setState({ active: name });
    }

    render() {
        const { active } = this.state;
        return (
            <Section>
                <Container>
                    <Row>
                        <Col xs="12" md="3">
                            <Sidebar
                                activate={this.activate}
                            />
                        </Col>
                        <Col xs="12" md="9">
                            { active === 'breakpoint'? <BreakpointEl /> : null }
                            { active === 'listener'? <Listener /> : null }
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}
