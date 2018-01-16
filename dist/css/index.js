'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withCss = exports.withPseudo = exports.withHover = exports.withBeforeAfter = exports.withMediaQuery = exports.Match = undefined;

var _Match = require('./Match');

Object.defineProperty(exports, 'Match', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Match).default;
    }
});

var _MediaQuery = require('./MediaQuery');

var _BeforeAfter = require('./BeforeAfter');

var _Hover = require('./Hover');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withPseudo(Comp) {
    return (0, _BeforeAfter.withBeforeAfter)((0, _Hover.withHover)(Comp));
}

function withCss(Comp) {
    return withPseudo((0, _MediaQuery.withMediaQuery)(Comp));
}

exports.withMediaQuery = _MediaQuery.withMediaQuery;
exports.withBeforeAfter = _BeforeAfter.withBeforeAfter;
exports.withHover = _Hover.withHover;
exports.withPseudo = withPseudo;
exports.withCss = withCss;