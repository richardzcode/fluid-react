'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.A = exports.Pre = exports.Button = exports.Textarea = exports.Input = exports.Li = exports.Ul = exports.Span = exports.Div = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _css = require('../css');

var _fsts = require('fsts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Div = function _Div(props) {
    return _react2.default.createElement(
        'div',
        props,
        props.children
    );
};
var Div = (0, _css.withMediaQuery)(_Div);

var _Span = function _Span(props) {
    return _react2.default.createElement(
        'span',
        props,
        props.children
    );
};
var Span = (0, _css.withMediaQuery)(_Span);

var _Ul = function _Ul(props) {
    return _react2.default.createElement(
        'ul',
        props,
        props.children
    );
};
var Ul = (0, _css.withMediaQuery)(_Ul);

var _Li = function _Li(props) {
    return _react2.default.createElement(
        'li',
        props,
        props.children
    );
};
var Li = (0, _css.withMediaQuery)(_Li);

var _Input = function _Input(props) {
    return _react2.default.createElement(
        'input',
        props,
        props.children
    );
};
var Input = (0, _css.withMediaQuery)(_Input);

var _Textarea = function _Textarea(props) {
    return _react2.default.createElement(
        'textarea',
        props,
        props.children
    );
};
var Textarea = (0, _css.withMediaQuery)(_Textarea);

var _Button = function _Button(props) {
    return _react2.default.createElement(
        'button',
        props,
        props.children
    );
};
var Button = (0, _css.withMediaQuery)(_Button);

var _Pre = function _Pre(props) {
    return _react2.default.createElement(
        'pre',
        props,
        props.children
    );
};
var Pre = (0, _css.withMediaQuery)(_Pre);

var _A = function _A(props) {
    return _react2.default.createElement(
        'a',
        props,
        props.children
    );
};
var A = (0, _css.withMediaQuery)(_A);

exports.Div = Div;
exports.Span = Span;
exports.Ul = Ul;
exports.Li = Li;
exports.Input = Input;
exports.Textarea = Textarea;
exports.Button = Button;
exports.Pre = Pre;
exports.A = A;