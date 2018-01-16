import React, { Component } from 'react';
import { JS } from 'fsts';

export function withBeforeAfter(Comp) {
    return class extends Component {
        render() {
            const style = this.props.style || {}
            const p = JS.lessProps(this.props, 'style');
            const styl = JS.lessProps(style, '@media.*');
            return beforeAfter(<Comp {...p} style={styl} />)
        }
    }
}

const beforeAfter = (el) => {
    const style = el.props.style || {};
    const before = style['::before'];
    const after = style['::after'];
    if (!before && !after) { return el; }

    let beforeEl = null;
    if (before) {
        const content = before.content;
        const styl = JS.lessProps(before, 'content');
        beforeEl = <span style={styl}>{content}</span>;
    }

    let afterEl = null;
    if (after) {
        const content = after.content;
        const styl = JS.lessProps(after, 'content');
        afterEl = <span style={styl}>{content}</span>;
    }

    return (
        <span className="fluid-react-before-after-wrapper" style={{position: 'relative'}}>
            {beforeEl}
            {el}
            {afterEl}
        </span>
    )
}
