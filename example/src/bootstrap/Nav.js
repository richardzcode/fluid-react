import React, { Component } from 'react';

import { withMediaQuery } from 'fluid-react';
import { JS } from 'fsts';

import { Bootstrap } from '../theme';
import { Icon } from './Icon';

const _Navbar = (props) => (
    <div {...props}>{props.children}</div>
)
const Navbar = withMediaQuery(_Navbar, Bootstrap.navbar);

const _NavBrand = (props) => (
    <div {...props}>{props.children}</div>
)
const NavBrand = withMediaQuery(_NavBrand, Bootstrap.navBrand);

const _NavScroll = (props) => (
    <div {...props}>{props.children}</div>
)
const NavScroll = withMediaQuery(_NavScroll, Bootstrap.navScroll);

const _NavRight = (props) => (
    <div {...props}>{props.children}</div>
)
const NavRight = withMediaQuery(_NavRight, Bootstrap.navRight);

const _NavNav = (props) => (
    <ul {...props}>{props.children}</ul>
)
const NavNav = withMediaQuery(_NavNav, Bootstrap.navNav);

class _NavItem extends Component {
    render() {
        const { style, active } = this.props;
        const styl = active? Object.assign({}, style, Bootstrap.navItemActive) : style;
        const p = JS.lessProps(this.props, ['style', 'active']);
        return <li {...p} style={styl}>{this.props.children}</li>
    }
}
const NavItem = withMediaQuery(_NavItem, Bootstrap.navItem);

class _NavSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: !!props.collapsed
        }
    }

    render() {
        const { collapsed } = this.state;
        return (
            <div {...this.props}>
                <div style={{ textAlign: 'right' }}><Icon name="bars" /></div>
                {collapsed? null : <NavNav>{this.props.children}</NavNav> }
            </div>
        )
    }
}
const NavSidebar = withMediaQuery(_NavSidebar, Bootstrap.navSidebar);

const _NavSidebarNav = (props) => (
    <ul {...props}>{props.children}</ul>
)
const NavSidebarNav = withMediaQuery(_NavSidebarNav, Bootstrap.navSidebarNav);

class _NavSidebarItem extends Component {
    render() {
        const { style, active } = this.props;
        const styl = active? Object.assign({}, style, Bootstrap.navSidebarItemActive) : style;
        const p = JS.lessProps(this.props, 'style');
        return <li {...p} style={styl}>{this.props.children}</li>
    }
}
const NavSidebarItem = withMediaQuery(_NavSidebarItem, Bootstrap.navSidebarItem);

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
