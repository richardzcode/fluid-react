'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withHover = withHover;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withHover(Comp) {
    return function (_Component) {
        _inherits(_class, _Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this.mouseEnterHandler = _this.mouseEnterHandler.bind(_this);
            _this.mouseLeaveHandler = _this.mouseLeaveHandler.bind(_this);

            _this.state = { hover: false };
            return _this;
        }

        _createClass(_class, [{
            key: 'mouseEnterHandler',
            value: function mouseEnterHandler() {
                this.setState({ hover: true });
            }
        }, {
            key: 'mouseLeaveHandler',
            value: function mouseLeaveHandler() {
                this.setState({ hover: false });
            }
        }, {
            key: 'render',
            value: function render() {
                var style = this.props.style;
                if (!style || !style[':hover']) {
                    return _react2.default.createElement(
                        Comp,
                        this.props,
                        this.props.children
                    );
                }

                var hover = this.state.hover;

                var p = _fsts.JS.lessProps(this.props, 'style');
                if (hover) {
                    style = style[':hover'];
                } else {
                    style = _fsts.JS.lessProps(style, ':hover');
                }
                return _react2.default.createElement(
                    Comp,
                    _extends({}, p, {
                        style: style,
                        onMouseEnter: this.mouseEnterHandler,
                        onMouseLeave: this.mouseLeaveHandler
                    }),
                    this.props.children
                );
            }
        }]);

        return _class;
    }(_react.Component);
}