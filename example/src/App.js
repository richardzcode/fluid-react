import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Row, Col } from 'fluid-react';

import { AppStyle, NavStyle } from './theme';
import { GridDemo, CssDemo } from './containers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        css: true,
        grid: true
    }
  }

  render() {
    const { css, grid } = this.state;

    return (
      <div style={AppStyle.app}>
        <header style={AppStyle.header}>
          <img src={logo} style={AppStyle.logo} alt="logo" />
          <h1 style={AppStyle.title}>Fluid-React Demo</h1>
        </header>

        <Row style={NavStyle.navBar}>
            <Col
                style={css? NavStyle.navItemActive : NavStyle.navItem}
                onClick={() => this.setState({ css: !css })}
            >
                CSS Demo
            </Col>
            <Col
                style={grid? NavStyle.navItemActive : NavStyle.navItem}
                onClick={() => this.setState({ grid: !grid })}
            >
                Grid System
            </Col>
            <Col xs="0" sm="3" md="6" lg="9">
            </Col>
        </Row>

        {css? <CssDemo /> : null}
        {grid? <GridDemo /> : null}

      </div>
    );
  }
}

export default App;
