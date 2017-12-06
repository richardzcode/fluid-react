'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleWithMediaQuery = function () {
    function StyleWithMediaQuery(style, notifier) {
        _classCallCheck(this, StyleWithMediaQuery);

        if (!style) {
            return;
        }

        this._style = style;
        this._old_style = Object.assign({}, style);
        this._queries = [];
        this._notifier = notifier;

        this._init();
    }

    _createClass(StyleWithMediaQuery, [{
        key: 'unlisten',
        value: function unlisten() {
            this._queries.forEach(function (query) {
                var mql = query.mql,
                    listener = query.listener;

                mql.removeListener(listener);
            });
        }
    }, {
        key: '_init',
        value: function _init() {
            var that = this;
            var style = this._style;
            Object.keys(style).forEach(function (key) {
                if (!key.startsWith('@media')) {
                    return;
                }

                var rules = key.split(/\s+/).slice(1).join(' ');
                if (!rules) {
                    return;
                }

                var matchStyle = style[key];
                var mql = window.matchMedia(rules);
                var listener = function listener(match) {
                    matchStyle._matches = match.matches;
                    that._applyMatches();
                };
                mql.addListener(listener);

                that._queries.push({
                    matchStyle: matchStyle,
                    mql: mql,
                    listener: listener
                });
            });
        }
    }, {
        key: '_applyMatches',
        value: function _applyMatches() {
            var new_style = Object.assign({}, this._old_style);
            this._queries.forEach(function (query) {
                var matchStyle = query.matchStyle;

                if (matchStyle._matches) {
                    Object.assign(new_style, matchStyle);
                }
            });

            Object.assign(this._style, new_style);
            if (this._notifier) {
                this._notifier(this._style);
            }
        }
    }]);

    return StyleWithMediaQuery;
}();

exports.default = StyleWithMediaQuery;