'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsts = require('fsts');

var _Range = require('./Range');

var _Range2 = _interopRequireDefault(_Range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _fsts.Logger('MatchMedia');

var MatchMedia = function () {
    function MatchMedia() {
        _classCallCheck(this, MatchMedia);

        if (!_fsts.Device.hasWindow()) {
            return;
        }

        this._match = this._match.bind(this);

        this._breakpointListeners = [];
        this._ranges = [new _Range2.default('xs', this._match, null, '575px'), new _Range2.default('sm', this._match, '576px', '767px'), new _Range2.default('md', this._match, '768px', '991px'), new _Range2.default('lg', this._match, '992px', '1199px'), new _Range2.default('xl', this._match, '1200px', null)];
    }

    _createClass(MatchMedia, [{
        key: 'listenBreakpoint',
        value: function listenBreakpoint(f) {
            var exists = this._breakpointListeners.filter(function (func) {
                return func === f;
            });
            if (exists.length > 0) {
                logger.debug('breakpoint listener already exists', f);
                return;
            }

            this._breakpointListeners.push(f);

            this._queryForListener(f);
        }
    }, {
        key: 'unlistenBreakpoint',
        value: function unlistenBreakpoint(f) {
            this._breakpointListeners = this._breakpointListeners.filter(function (func) {
                return func !== f;
            });
        }
    }, {
        key: '_match',
        value: function _match(match, vw) {
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