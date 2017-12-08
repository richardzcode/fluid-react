import React, { Component } from 'react';

import { Container, Row, Col } from 'fluid-react';

import {
    Section,
    NavSidebar,
    NavSidebarNav,
    NavSidebarItem
} from '../bootstrap';

import {
    EqualWidth,
    Fluid,
    OneWidth,
    VariableWidth,
    ZeroWidth,
    MultiRow,
    VerticalAlignment,
    SelfAlignment,
    HorizontalAlignment,
    Nest
} from '../components/grid';

const Sidebar = (props) => {
    const { activate } = props;
    const items = [
        { name: 'equal_width', title: 'Equal Width' },
        { name: 'fluid', title: 'Fluid' },
        { name: 'one_width', title: 'Set One Width' },
        { name: 'variable_width', title: 'Variable Width' },
        { name: 'zero_width', title: 'Zero Width' },
        { name: 'multi_row', title: 'Multi-Row' },
        { name: 'vertical_alignment', title: 'Vertical Alignment' },
        { name: 'self_alignment', title: 'Self Alignment' },
        { name: 'horizontal_alignment', title: 'Horizontal Alignment' },
        { name: 'nest', title: 'Nest' }
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

export default class GridSection extends Component {
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);

        this.state = {
            active: 'equal_width'
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
                            { active === 'equal_width'? <EqualWidth /> : null }
                            { active === 'fluid'? <Fluid /> : null }
                            { active === 'one_width'? <OneWidth /> : null }
                            { active === 'variable_width'? <VariableWidth /> : null }
                            { active === 'zero_width'? <ZeroWidth /> : null }
                            { active === 'multi_row'? <MultiRow /> : null }
                            { active === 'vertical_alignment'? <VerticalAlignment /> : null }
                            { active === 'self_alignment'? <SelfAlignment /> : null }
                            { active === 'horizontal_alignment'? <HorizontalAlignment /> : null }
                            { active === 'nest'? <Nest /> : null }
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}
