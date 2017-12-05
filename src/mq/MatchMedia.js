import { Logger, Device } from 'fsts';

import Range from './Range';

const logger = new Logger('MatchMedia');

export default class MatchMedia {
    constructor() {
        if (!Device.hasWindow()) { return; }

        this._match = this._match.bind(this);

        this._breakpointListeners = [];
        this._ranges = [
            new Range('xs', this._match, null, '575px'),
            new Range('sm', this._match, '576px', '767px'),
            new Range('md', this._match, '768px', '991px'),
            new Range('lg', this._match, '992px', '1199px'),
            new Range('xl', this._match, '1200px', null)
        ];
    }

    listenBreakpoint(f) {
        const exists = this._breakpointListeners.filter(func => func === f);
        if (exists.length > 0) {
            logger.debug('breakpoint listener already exists', f);
            return;
        }

        this._breakpointListeners.push(f);

        this._queryForListener(f);
    }

    unlistenBreakpoint(f) {
        this._breakpointListeners = this._breakpointListeners.filter(
            func => func !== f
        )
    }

    _match(match, vw) {
        if (match.matches) {
            // in vw
            this._onBreakpoint(vw);
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
