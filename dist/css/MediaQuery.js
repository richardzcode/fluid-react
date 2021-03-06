'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withMediaQuery = withMediaQuery;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _media = require('../media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withMediaQuery(Comp) {
    return function (_Component) {
        _inherits(_class, _Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this.state = { style: props.style || {} };
            return _this;
        }

        _createClass(_class, [{
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps, prevState) {
                if (this.props.style !== prevProps.style) {
                    this.attachStyle();
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.attachStyle();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                _media2.default.detach(this._style);
            }
        }, {
            key: 'attachStyle',
            value: function attachStyle() {
                var _this2 = this;

                var hasWindow = _fsts.Device.hasWindow();

                if (this._style) {
                    _media2.default.detach(this._style);
                }

                this._style = Object.assign({}, this.props.style);
                if (hasWindow) {
                    this.setState({ style: this._style });
                    return _media2.default.attach(this._style, function (new_style) {
                        _this2.setState({ style: new_style });
                    });
                }

                var queries = {};
                Object.keys(this._style).filter(function (key) {
                    return key.startsWith('@media');
                }).forEach(function (key) {
                    return queries[key] = _this2._style[key];
                });
                if (Object.keys(queries).length > 0) {
                    this._style['__fr_class__'] = '__fr_mq_' + _fsts.JS.cheapId() + '__';
                    this._style['__fr_queries__'] = queries;
                }
                return _fsts.JS.lessProps(this._style, '@media.*');
            }
        }, {
            key: 'render',
            value: function render() {
                if (_fsts.Device.hasWindow()) {
                    var _style = this.state;
                    var _styl = _fsts.JS.lessProps(_style, '@media.*');
                    var _p = _fsts.JS.lessProps(this.props, 'style');
                    return _react2.default.createElement(Comp, _extends({}, _p, { style: _styl }));
                }

                var style = this.attachStyle();
                if (!style['__fr_class__']) {
                    var _p2 = _fsts.JS.lessProps(this.props, 'style');
                    return _react2.default.createElement(Comp, _extends({}, _p2, { style: style }));
                }

                var cls = style['__fr_class__'];
                var queries = style['__fr_queries__'];
                var styl = _fsts.JS.lessProps(style, '__fr.*');
                var css = '.' + cls + _fsts.JS.styleToCss(styl);
                Object.keys(queries).forEach(function (key) {
                    css += key + '{' + '.' + cls + _fsts.JS.styleToCss(queries[key]) + '}';
                });

                var p = _fsts.JS.lessProps(this.props, 'style');
                return _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement(Comp, _extends({}, p, { className: cls })),
                    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } })
                );
            }
        }]);

        return _class;
    }(_react.Component);
}