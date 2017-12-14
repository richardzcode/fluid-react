export default class Query {
    constructor(name, onMatch, query) {
        this.name = name;
        this.onMatch = onMatch;

        this._match = this._match.bind(this);

        this._mql = window.matchMedia(query);
        this._mql.addListener(this._match);
    }

    match() {
        return this._mql && this._mql.matches;
    }

    unlisten() {
        if (this._mql) { this._mql.removeListener(this._match); }
    }

    _match(match) {
        this.onMatch(match, this.name);
    }
}
