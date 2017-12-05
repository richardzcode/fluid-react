'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Range = function () {
    function Range(name, onMatch, min, max) {
        _classCallCheck(this, Range);

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

    _createClass(Range, [{
        key: 'matchMin',
        value: function matchMin() {
            return !this._min || this._min.matches;
        }
    }, {
        key: 'matchMax',
        value: function matchMax() {
            return !this._max || this._max.matches;
        }
    }, {
        key: '_match',
        value: function _match(match) {
            this.onMatch(match, this.name);
        }
    }]);

    return Range;
}();

exports.default = Range;