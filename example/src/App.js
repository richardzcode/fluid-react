import React, { Component } from 'react';

import {
    Navbar,
    NavBrand,
    NavScroll,
    NavRight,
    NavNav,
    NavItem,

    Icon
} from './bootstrap';

import { AppStyle } from './theme';
import {
    GridSection,
    MediaQuerySection,
    BreakpointSection,
    PseudoSection
} from './containers';

const repo = 'https://github.com/richardzcode/fluid-react';
const stylejs = repo + '/blob/master/example/src/theme/Bootstrap.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        active: 'grid'
    }
  }

  openSourceCode() {
    window.location.href = stylejs;
  }

  openGitHub() {
    window.location.href = repo;
  }

  render() {
    const { active } = this.state;

    return (
      <div style={AppStyle.app}>
        <Navbar>
            <NavBrand>F-R</NavBrand>
            <NavScroll><NavNav>
                <NavItem
                    key="grid"
                    active={active === 'grid'}
                    onClick={() => this.setState({ active: 'grid' })}
                >Grid</NavItem>
                <NavItem
                    key="mq"
                    active={active === 'mq'}
                    onClick={() => this.setState({ active: 'mq' })}
                >Media Query</NavItem>
                <NavItem
                    key="breakpoint"
                    active={active === 'breakpoint'}
                    onClick={() => this.setState({ active: 'breakpoint' })}
                >Breakpoint</NavItem>
                <NavItem
                    key="pseudo"
                    active={active === 'pseudo'}
                    onClick={() => this.setState({ active: 'pseudo' })}
                >Pseudo</NavItem>
            </NavNav></NavScroll>
            <NavRight><NavNav>
                <NavItem
                    onClick={this.openSourceCode}
                >
                    <Icon name="code" />
                </NavItem>
                <NavItem
                    onClick={this.openGitHub}
                >
                    <Icon name="github" />
                    GitHub
                </NavItem>
            </NavNav></NavRight>
        </Navbar>

        {active === 'grid'? <GridSection /> : null}
        {active === 'mq'? <MediaQuerySection /> : null}
        {active === 'breakpoint'? <BreakpointSection /> : null}
        {active === 'pseudo'? <PseudoSection /> : null}

      </div>
    );
  }
}

export default App;
