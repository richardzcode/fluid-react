import { Device } from 'fsts';

export default class MediaQueryAtom {
    constructor(style, notifier) {
        if (!style) { return; }

        this._style = style;
        this._old_style = Object.assign({}, style);
        this._queries = [];
        this._notifier = notifier;

        this._init();
    }

    unlisten() {
        this._queries.forEach(query => {
            const { mql, listener } = query;
            mql.removeListener(listener);
        });
    }

    _init() {
        const hasWindow = Device.hasWindow();

        const that = this;
        const style = this._style;
        const classNames = [];
        Object.keys(style).forEach(key => {
            if (!key.startsWith('@media')) { return; }

            const rules = key.split(/\s+/).slice(1).join(' ');
            if (!rules) { return; }

            if (hasWindow) {
                const matchStyle = style[key];
                const mql = window.matchMedia(rules);
                const listener = (match) => {
                    matchStyle._matches = match.matches;
                    that._applyMatches();
                };
                mql.addListener(listener);

                matchStyle._matches = mql.matches;
                that._queries.push({
                    matchStyle: matchStyle,
                    mql: mql,
                    listener: listener
                });
            } else {
                classNames.push(rules.replace(/[^a-z0-9]/g, '-'));
            }
        });
        that._applyMatches();
        if (classNames.length > 0) { style['__fr_class__'] = classNames; }
    }

    _applyMatches() {
        if (!this._notifier) { return; } // do nothing

        const new_style = Object.assign({}, this._old_style);
        this._queries.forEach(query => {
            const { matchStyle } = query;
            if (matchStyle._matches) {
                Object.assign(new_style, matchStyle);
            }
        });
        
        this._notifier(new_style);
    }
}
