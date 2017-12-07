'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Breakpoint = undefined;

var _MediaQuery = require('./MediaQuery');

Object.keys(_MediaQuery).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _MediaQuery[key];
        }
    });
});

var _Pseudo = require('./Pseudo');

Object.keys(_Pseudo).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _Pseudo[key];
        }
    });
});

var _Breakpoint = require('./Breakpoint');

Object.defineProperty(exports, 'Breakpoint', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Breakpoint).default;
    }
});
exports.withCss = withCss;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withCss(Comp) {
    return (0, _Pseudo.withPseudo)((0, _MediaQuery.withMediaQuery)(Comp));
}