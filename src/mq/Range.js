export default class Range {
    constructor(name, onMatch, min, max) {
        this.name = name;
        this.onMatch = onMatch;

        this._match = this._match.bind(this);

        if (min) {
            this._min = window.matchMedia('(min-width: ' + min + ')');
            this._min.addListener(this._match);
        }
        if (max) {
            this._max = window.matchMedia('(max-width: ' + max + ')');
            this._max.addListener(this._match);
        }
    }

    matchMin() {
        return !this._min || this._min.matches;
    }

    matchMax() {
        return !this._max || this._max.matches;
    }

    _match(match) {
        this.onMatch(match, this.name);
    }
}
