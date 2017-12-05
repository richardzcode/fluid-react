'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MatchMedia = exports.Empty = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsts = require('fsts');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _fsts.Logger('Query');

var Empty = exports.Empty = function () {
    function Empty() {
        _classCallCheck(this, Empty);
    }

    _createClass(Empty, [{
        key: 'listenBreakpoint',
        value: function listenBreakpoint() {}
    }, {
        key: 'unlistenBreakpoint',
        value: function unlistenBreakpoint() {}
    }]);

    return Empty;
}();

var MatchMedia = exports.MatchMedia = function () {
    function MatchMedia() {
        _classCallCheck(this, MatchMedia);

        if (!_fsts.Device.hasWindow()) {
            return;
        }

        this._match = this._match.bind(this);

        this._breakpointListeners = [];
        this._initQuery();
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
        key: '_initQuery',
        value: function _initQuery() {
            var _this = this;

            this._sm_min = window.matchMedia('(min-width: 576px)');
            this._md_min = window.matchMedia('(min-width: 768px)');
            this._lg_min = window.matchMedia('(min-width: 992px)');
            this._xl_min = window.matchMedia('(min-width: 1200px)');

            this._xs_max = window.matchMedia('(max-width: 575px)');
            this._sm_max = window.matchMedia('(max-width: 767px)');
            this._md_max = window.matchMedia('(max-width: 991px)');
            this._lg_max = window.matchMedia('(max-width: 1199px)');

            this._sm_min.addListener(function (match) {
                return _this._match(match, 'sm');
            });
            this._md_min.addListener(function (match) {
                return _this._match(match, 'md');
            });
            this._lg_min.addListener(function (match) {
                return _this._match(match, 'lg');
            });
            this._xl_min.addListener(function (match) {
                return _this._match(match, 'xl');
            });

            this._xs_max.addListener(function (match) {
                return _this._match(match, 'xs');
            });
            this._sm_max.addListener(function (match) {
                return _this._match(match, 'sm');
            });
            this._md_max.addListener(function (match) {
                return _this._match(match, 'md');
            });
            this._lg_max.addListener(function (match) {
                return _this._match(match, 'lg');
            });
        }
    }, {
        key: '_queryForListener',
        value: function _queryForListener(f) {
            var vw = 'xs';
            if (this._sm_min.matches) {
                vw = 'sm';
            }
            if (this._md_min.matches) {
                vw = 'md';
            }
            if (this._lg_min.matches) {
                vw = 'lg';
            }
            if (this._xl_min.matches) {
                vw = 'xl';
            }

            f(vw);
        }
    }]);

    return MatchMedia;
}();

var _instance = new Empty();
if (_fsts.Device.hasWindow()) {
    _instance = new MatchMedia();
}
exports.default = _instance;