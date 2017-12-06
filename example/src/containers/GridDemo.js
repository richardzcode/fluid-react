import React, { Component } from 'react';

import { AppStyle } from '../theme';

import {
    Intro,
    H3,

    Container,
    Row,
    Col,
    W100
} from '../components';

import { codeSnippet } from './Common';

class GridDemo extends Component {
  render() {
    return (
      <div style={AppStyle.content}>
        <Intro>
          Grid System
        </Intro>

        <H3>Equal Width</H3>
        <Container>
            <Row>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
        </Container>
        {codeSnippet(`
        <Container>
            <Row>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
        </Container>
        `)}

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
        {codeSnippet(`
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
        `)}

        <H3>Set One Width</H3>
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="6">2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="5">2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
        {codeSnippet(`
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="6">2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="5">2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
        `)}

        <H3>Variable Width</H3>
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="auto">variable width content</Col>
                <Col>1 of 3</Col>
            </Row>
        </Container>
        {codeSnippet(`
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col xs="auto">variable width content</Col>
                <Col>1 of 3</Col>
            </Row>
        </Container>
        `)}

        <H3>Zero Width</H3>
        <Container>
            <Row>
                <Col xs="0" sm="6">1 of 2</Col>
                <Col xs="12" sm="6">2 of 2</Col>
            </Row>
        </Container>
        {codeSnippet(`
        <Container>
            <Row>
                <Col xs="0" sm="6">1 of 2</Col>
                <Col xs="12" sm="6">2 of 2</Col>
            </Row>
        </Container>
        `)}

        <H3>Multi-Row</H3>
        <Container>
            <Row>
                <Col>col</Col>
                <Col>col</Col>
                <W100 />
                <Col>col</Col>
                <Col>col</Col>
            </Row>
        </Container>
        {codeSnippet(`
        <Container>
            <Row>
                <Col>col</Col>
                <Col>col</Col>
                <W100 />
                <Col>col</Col>
                <Col>col</Col>
            </Row>
        </Container>
        `)}

        <H3>Vertical Alignment</H3>
        <Container>
            <Row style={{minHeight: '8rem', alignItems: 'flex-start'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
            <Row style={{minHeight: '8rem', alignItems: 'center'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
            <Row style={{minHeight: '8rem', alignItems: 'flex-end'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
        </Container>
        {codeSnippet(`
        <Container>
            <Row style={{minHeight: '8rem', alignItems: 'flex-start'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
            <Row style={{minHeight: '8rem', alignItems: 'center'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
            <Row style={{minHeight: '8rem', alignItems: 'flex-end'}}>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
                <Col>One of three columns</Col>
            </Row>
        </Container>
        `)}

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
        {codeSnippet(`
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
        `)}

        <H3>Horizontal Alignment</H3>
        <Container>
            <Row style={{justifyContent: 'flex-start'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'center'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'space-around'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'space-between'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
        </Container>
        {codeSnippet(`
        <Container>
            <Row style={{justifyContent: 'flex-start'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'center'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'space-around'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
            <Row style={{justifyContent: 'space-between'}}>
                <Col xs="4">One of two columns</Col>
                <Col xs="4">One of two columns</Col>
            </Row>
        </Container>
        `)}

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
        {codeSnippet(`
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
        `)}

      </div>
    );
  }
}

export default GridDemo;
