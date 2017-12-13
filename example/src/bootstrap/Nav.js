import React, { Component } from 'react';

import { Div, Ul, Li } from 'fluid-react';
import { JS } from 'fsts';

import { Bootstrap } from '../theme';
import { Icon } from './Icon';

const Navbar = (props) => {
    return <Div {...props} style={Bootstrap.navbar}>{props.children}</Div>
}

const NavBrand = (props) => (
    <Div {...props} style={Bootstrap.navBrand}>{props.children}</Div>
)

const NavScroll = (props) => (
    <Div {...props} style={Bootstrap.navScroll}>{props.children}</Div>
)

const NavRight = (props) => (
    <Div {...props} style={Bootstrap.navRight}>{props.children}</Div>
)

const NavNav = (props) => {
    return <Ul {...props} style={Bootstrap.navNav}>{props.children}</Ul>
}

class NavItem extends Component {
    render() {
        const { style, active } = this.props;
        const styl = Object.assign(
            {},
            Bootstrap.navItem,
            style,
            active? Bootstrap.navItem['.active'] : null
        );
        const p = JS.lessProps(this.props, ['style', 'active']);
        return <Li {...p} style={styl}>{this.props.children}</Li>
    }
}

class NavSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: !!props.collapsed
        }
    }

    render() {
        const { collapsed } = this.state;
        return (
            <div {...this.props} style={Bootstrap.navSidebar}>
                <div
                    style={{ textAlign: 'right' }}
                    onClick={() => this.setState({ collapsed: !this.state.collapsed })}
                ><Icon name="bars" /></div>
                {collapsed? null : <NavNav>{this.props.children}</NavNav> }
            </div>
        )
    }
}

const NavSidebarNav = (props) => (
    <Ul {...props} style={Bootstrap.navSidebarNav}>{props.children}</Ul>
)

class NavSidebarItem extends Component {
    render() {
        const { style, active } = this.props;
        const styl = Object.assign(
            {},
            Bootstrap.navSidebarItem,
            style,
            active? Bootstrap.navSidebarItem['.active'] : null
        )
        const p = JS.lessProps(this.props, 'style');
        return <Li {...p} style={styl}>{this.props.children}</Li>
    }
}

export {
    Navbar,
    NavBrand,
    NavScroll,
    NavRight,
    NavNav,
    NavItem,
    NavSidebar,
    NavSidebarNav,
    NavSidebarItem
};
