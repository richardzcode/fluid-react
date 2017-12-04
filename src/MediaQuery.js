import { Logger } from 'fsts';

import { hasWindow } from './utils';

const logger = new Logger('Query');

export class Empty {
    listenBreakpoint() {
    }

    unlistenBreakpoint() {
    }
}

export class MatchMedia {
    constructor() {
        if (!hasWindow()) { return; }

        this._match = this._match.bind(this);

        this._breakpointListeners = [];
        this._initQuery();
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

    _initQuery() {
        this._sm_min = window.matchMedia('(min-width: 576px)');
        this._md_min = window.matchMedia('(min-width: 768px)');
        this._lg_min = window.matchMedia('(min-width: 992px)');
        this._xl_min = window.matchMedia('(min-width: 1200px)');

        this._xs_max = window.matchMedia('(max-width: 575px)');
        this._sm_max = window.matchMedia('(max-width: 767px)');
        this._md_max = window.matchMedia('(max-width: 991px)');
        this._lg_max = window.matchMedia('(max-width: 1199px)');

        this._sm_min.addListener(match => this._match(match, 'sm'));
        this._md_min.addListener(match => this._match(match, 'md'));
        this._lg_min.addListener(match => this._match(match, 'lg'));
        this._xl_min.addListener(match => this._match(match, 'xl'));

        this._xs_max.addListener(match => this._match(match, 'xs'));
        this._sm_max.addListener(match => this._match(match, 'sm'));
        this._md_max.addListener(match => this._match(match, 'md'));
        this._lg_max.addListener(match => this._match(match, 'lg'));
    }

    _queryForListener(f) {
        let vw = 'xs';
        if (this._sm_min.matches) { vw = 'sm'; }
        if (this._md_min.matches) { vw = 'md'; }
        if (this._lg_min.matches) { vw = 'lg'; }
        if (this._xl_min.matches) { vw = 'xl'; }

        f(vw);
    }
}

let _instance = new Empty();
if (hasWindow()) {
    _instance = new MatchMedia();
}
export default _instance;
