"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Query = function () {
    function Query(name, onMatch, query) {
        _classCallCheck(this, Query);

        this.name = name;
        this.onMatch = onMatch;

        this._match = this._match.bind(this);

        this._mql = window.matchMedia(query);
        this._mql.addListener(this._match);
    }

    _createClass(Query, [{
        key: "match",
        value: function match() {
            return this._mql && this._mql.matches;
        }
    }, {
        key: "unlisten",
        value: function unlisten() {
            if (this._mql) {
                this._mql.removeListener(this._match);
            }
        }
    }, {
        key: "_match",
        value: function _match(match) {
            this.onMatch(match, this.name);
        }
    }]);

    return Query;
}();

exports.default = Query;