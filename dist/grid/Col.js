'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _media = require('../media');

var _media2 = _interopRequireDefault(_media);

var _GridStyle = require('./GridStyle');

var _GridStyle2 = _interopRequireDefault(_GridStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _fsts.Logger('Col');

var Col = function (_Component) {
    _inherits(Col, _Component);

    function Col(props) {
        _classCallCheck(this, Col);

        var _this = _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).call(this, props));

        _this.onBreakpoint = _this.onBreakpoint.bind(_this);

        _this.state = {
            vw: 'xs'
        };
        return _this;
    }

    _createClass(Col, [{
        key: 'cellCounts',
        value: function cellCounts() {
            var _props = this.props,
                xs = _props.xs,
                sm = _props.sm,
                md = _props.md,
                lg = _props.lg,
                xl = _props.xl;

            var counts = [_fsts.JS.undefinedThen(xs, ''), _fsts.JS.undefinedThen(sm, ''), _fsts.JS.undefinedThen(md, ''), _fsts.JS.undefinedThen(lg, ''), _fsts.JS.undefinedThen(xl, '')];

            // back fill
            for (var i = 0; i < counts.length; i++) {
                var val = counts[i];
                if (val !== '') {
                    for (var j = i - 1; j >= 0; j--) {
                        counts[j] = val;
                    }
                    break;
                }
            }

            // forward fill
            for (var i = 1; i < counts.length; i++) {
                if (counts[i] === '') {
                    counts[i] = counts[i - 1];
                }
            }

            return counts;
        }
    }, {
        key: 'cellCount',
        value: function cellCount() {
            var vw = this.state.vw;

            var index = {
                xs: 0,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }[vw];
            var counts = this.cellCounts();
            return counts[index];
        }
    }, {
        key: 'calcStyle',
        value: function calcStyle() {
            var count = this.cellCount();
            return _GridStyle2.default['col' + count];
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _media2.default.listenBreakpoint(this.onBreakpoint);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _media2.default.unlistenBreakpoint(this.onBreakpoint);
        }
    }, {
        key: 'onBreakpoint',
        value: function onBreakpoint(vw) {
            logger.debug('on breakpoint ' + vw);
            this.setState({ vw: vw });
        }
    }, {
        key: 'render',
        value: function render() {
            if (_fsts.Device.hasWindow()) {
                var style = this.props.style;

                var styl = Object.assign({}, style, this.calcStyle());
                var p = _fsts.JS.lessProps(this.props, 'style');
                return _react2.default.createElement(
                    'div',
                    _extends({ className: 'fluid-react-col', style: styl }, p),
                    this.props.children
                );
            }

            var cls = 'fluid-react-col __fr_grid_col__';
            var col = this.props.col;

            if (col) {
                cls += ' __fr_grid_col_' + col + '__';
            }
            var counts = this.cellCounts();
            if (counts[0]) {
                // cellCounts ensures if there is any number then all should have number
                cls += ' __fr_grid_xs_' + counts[0] + '__';
                cls += ' __fr_grid_sm_' + counts[1] + '__';
                cls += ' __fr_grid_md_' + counts[2] + '__';
                cls += ' __fr_grid_lg_' + counts[3] + '__';
                cls += ' __fr_grid_xl_' + counts[4] + '__';
            }
            return _react2.default.createElement(
                'div',
                _extends({ className: cls }, this.props),
                this.props.children
            );
        }
    }]);

    return Col;
}(_react.Component);

exports.default = Col;