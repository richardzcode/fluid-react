import { Logger, JS, Device } from 'fsts';

import Query from './Query';
import Range from './Range';
import MediaQueryAtom from './MediaQueryAtom';

const logger = new Logger('MatchMedia');

export default class MatchMedia {
    constructor() {
        this._breakpointMatch = this._breakpointMatch.bind(this);

        this._breakpointListeners = [];
        this._ranges = [];
        this._queries = {};
        this._styles = [];

        if (Device.hasWindow()) {
            this._ranges = [
                new Range('xs', this._breakpointMatch, null, '575px'),
                new Range('sm', this._breakpointMatch, '576px', '767px'),
                new Range('md', this._breakpointMatch, '768px', '991px'),
                new Range('lg', this._breakpointMatch, '992px', '1199px'),
                new Range('xl', this._breakpointMatch, '1200px', null)
            ];
        }
    }

    listenBreakpoint(f) {
        const appended = JS.appendUnique(this._breakpointListeners, f);
        if (appended) {
            this._queryForListener(f);
        } else {
            logger.debug('breakpoint listener already exists', f);
            return;
        }
    }

    addQuery(name, query) {
        new Query(name, this._breakpointMatch, query);
    }

    unlistenBreakpoint(f) {
        this._breakpointListeners = this._breakpointListeners.filter(
            func => func !== f
        )
    }

    attach(style, notifier) {
        if (!style) {
            logger.warn('no style to attach');
            return;
        }

        if (!notifier) { // default notifier logs new_style
            notifier = (new_style) => {
                logger.debug('style modified', new_style);
            }
        }

        const atoms = [];
        if (JS.hasProps(style, '@media.*')) {
            const atom = new MediaQueryAtom(style, notifier);
            atoms.push(atom);
        }

        JS.traverseProps(style, (path, key, val) => {
            if (JS.hasProps(val, '@media.*')) {
                const atom = new MediaQueryAtom(val, (new_style) => {
                    notifier(style); // notify with root style.
                });
                atoms.push(atom);
            }
        });

        this._styles.push({
            style: style,
            atoms: atoms
        });

        return style;
    }

    detach(style) {
        const found = this._styles.filter(entry => entry.style === style);
        if (found.length > 0) {
            found[0].atoms.forEach(atom => atom.unlisten());
        }
    }

    _breakpointMatch(match, name) {
        if (match.matches) {
            // in vw
            this._onBreakpoint(name);
        } else {
            // out vw
        }
    }

    _onBreakpoint(vw) {
        logger.debug('on breakpoint ' + vw);

        this._breakpointListeners.forEach(listener => {
            try {
                listener(vw);
            } catch (e) {
                logger.error('on breakpoint ' + vw + ' error', listener, e);
            }
        });
    }

    _queryForListener(f) {
        let vw = 'xs';
        for (var i = 0; i < this._ranges.length; i++) {
            const range = this._ranges[i];
            if (range.matchMin()) { vw = range.name; }
        }
        f(vw);
    }
}
