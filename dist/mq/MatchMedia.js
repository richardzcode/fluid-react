'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsts = require('fsts');

var _Range = require('./Range');

var _Range2 = _interopRequireDefault(_Range);

var _StyleWithMediaQuery = require('./StyleWithMediaQuery');

var _StyleWithMediaQuery2 = _interopRequireDefault(_StyleWithMediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _fsts.Logger('MatchMedia');

var MatchMedia = function () {
    function MatchMedia() {
        _classCallCheck(this, MatchMedia);

        if (!_fsts.Device.hasWindow()) {
            return;
        }

        this._breakpointMatch = this._breakpointMatch.bind(this);

        this._breakpointListeners = [];
        this._ranges = [new _Range2.default('xs', this._breakpointMatch, null, '575px'), new _Range2.default('sm', this._breakpointMatch, '576px', '767px'), new _Range2.default('md', this._breakpointMatch, '768px', '991px'), new _Range2.default('lg', this._breakpointMatch, '992px', '1199px'), new _Range2.default('xl', this._breakpointMatch, '1200px', null)];

        this._styles = [];
    }

    _createClass(MatchMedia, [{
        key: 'listenBreakpoint',
        value: function listenBreakpoint(f) {
            var appended = _fsts.JS.appendUnique(this._breakpointListeners, f);
            if (appended) {
                this._queryForListener(f);
            } else {
                logger.debug('breakpoint listener already exists', f);
                return;
            }
        }
    }, {
        key: 'unlistenBreakpoint',
        value: function unlistenBreakpoint(f) {
            this._breakpointListeners = this._breakpointListeners.filter(function (func) {
                return func !== f;
            });
        }
    }, {
        key: 'attach',
        value: function attach(style, notifier) {
            if (!style) {
                logger.warn('no style to attach');
                return;
            }

            if (!notifier) {
                // default notifier logs new_style
                notifier = function notifier(new_style) {
                    logger.debug('style modified', new_style);
                };
            }

            var swmqs = [];
            if (_fsts.JS.hasProps(style, '@media.*')) {
                var swmq = new _StyleWithMediaQuery2.default(style, notifier);
                swmqs.push(swmq);
            }

            _fsts.JS.traverseProps(style, function (path, key, val) {
                if (_fsts.JS.hasProps(val, '@media.*')) {
                    var _swmq = new _StyleWithMediaQuery2.default(val, function (new_style) {
                        notifier(style); // notify with root style.
                    });
                    swmqs.push(_swmq);
                }
            });

            this._styles.push({
                style: style,
                swmqs: swmqs
            });
        }
    }, {
        key: 'detach',
        value: function detach(style) {
            var found = this._styles.filter(function (entry) {
                return entry.style === style;
            });
            if (found.length > 0) {
                found[0].swmqs.forEach(function (swmq) {
                    return swmq.unlisten();
                });
            }
        }
    }, {
        key: '_breakpointMatch',
        value: function _breakpointMatch(match, vw) {
            if (match.matches) {
                // in vw
                this._onBreakpoint(vw);
            } else {
                // out vw
            }
        }
    }, {
        key: '_onBreakpoint',
        value: function _onBreakpoint(vw) {
            logger.debug('on breakpoint ' + vw);

            this._breakpointListeners.forEach(function (listener) {
                try {
                    listener(vw);
                } catch (e) {
                    logger.error('on breakpoint ' + vw + ' error', listener, e);
                }
            });
        }
    }, {
        key: '_queryForListener',
        value: function _queryForListener(f) {
            var vw = 'xs';
            for (var i = 0; i < this._ranges.length; i++) {
                var range = this._ranges[i];
                if (range.matchMin()) {
                    vw = range.name;
                }
            }
            f(vw);
        }
    }]);

    return MatchMedia;
}();

exports.default = MatchMedia;