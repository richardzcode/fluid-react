import React, { Component } from 'react';

import { Container, Row, Col } from 'fluid-react';

import {
    Section,
    NavSidebar,
    NavSidebarNav,
    NavSidebarItem
} from '../bootstrap';

import {
    ResponsiveStyle
} from '../components/mediaquery';

const Sidebar = (props) => {
    const { activate } = props;
    const items = [
        { name: 'responsive_style', title: 'Responsive Style' }
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
                            { active === 'responsive_style'? <ResponsiveStyle /> : null }
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}
