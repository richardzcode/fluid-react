import React, { Component } from 'react';

import { AppStyle, CssDemoStyle } from '../theme';
import {
    Intro,
    H3,

    ResponsiveColor,
    MobileDesktop,
    Brand,
    BreakpointBlocks
} from '../components';

import {
    ResponsiveColorCode,
    MobileDesktopCode,
    BrandCode,
    BreakpointBlocksCode
} from './CssDemoCode';

class CssDemo extends Component {
    render() {
        return (
            <div style={AppStyle.content}>
                <Intro>CSS Demo</Intro>

                <H3>Responsive Style</H3>
                <ResponsiveColor style={CssDemoStyle.responsiveColor}>
                    Color changes with width
                </ResponsiveColor>
                { ResponsiveColorCode }

                <H3>Breakpoint</H3>
                <MobileDesktop />
                {MobileDesktopCode}

                <H3>Breakpoint Blocks</H3>
                <BreakpointBlocks />
                {BreakpointBlocksCode}

                <H3>Pseudo</H3>
                <Brand style={CssDemoStyle.brand}>
                    React
                </Brand>
                {BrandCode}

            </div>
        )
    }
}

export default CssDemo;
