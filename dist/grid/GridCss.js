'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basic = {
    __fr_grid_col__: {
        flex: '1 0 0',
        maxWidth: '100%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_0__: {
        display: 'none'
    },
    __fr_grid_col_1__: {
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_2__: {
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_3__: {
        flex: '0 0 25%',
        maxWidth: '25%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_4__: {
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_5__: {
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_6__: {
        flex: '0 0 50%',
        maxWidth: '50%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_7__: {
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_8__: {
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_9__: {
        flex: '0 0 75%',
        maxWidth: '75%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_10__: {
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_11__: {
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_col_12__: {
        flex: '0 0 100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
    }
};

var queries = {};

queries['@media (max-width: 575px)'] = {
    __fr_grid_xs_0__: {
        display: 'none'
    },
    __fr_grid_xs_1__: {
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_2__: {
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_3__: {
        flex: '0 0 25%',
        maxWidth: '25%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_4__: {
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_5__: {
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_6__: {
        flex: '0 0 50%',
        maxWidth: '50%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_7__: {
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_8__: {
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_9__: {
        flex: '0 0 75%',
        maxWidth: '75%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_10__: {
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_11__: {
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xs_12__: {
        flex: '0 0 100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
    }
};

queries['@media (min-width: 576px) and (max-width: 767px)'] = {
    __fr_grid_sm_0__: {
        display: 'none'
    },
    __fr_grid_sm_1__: {
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_2__: {
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_3__: {
        flex: '0 0 25%',
        maxWidth: '25%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_4__: {
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_5__: {
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_6__: {
        flex: '0 0 50%',
        maxWidth: '50%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_7__: {
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_8__: {
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_9__: {
        flex: '0 0 75%',
        maxWidth: '75%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_10__: {
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_11__: {
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_sm_12__: {
        flex: '0 0 100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
    }
};

queries['@media (min-width: 768px) and (max-width: 991px)'] = {
    __fr_grid_md_0__: {
        display: 'none'
    },
    __fr_grid_md_1__: {
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_2__: {
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_3__: {
        flex: '0 0 25%',
        maxWidth: '25%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_4__: {
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_5__: {
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_6__: {
        flex: '0 0 50%',
        maxWidth: '50%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_7__: {
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_8__: {
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_9__: {
        flex: '0 0 75%',
        maxWidth: '75%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_10__: {
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_11__: {
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_md_12__: {
        flex: '0 0 100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
    }
};

queries['@media (min-width: 992px) and (max-width: 1199px)'] = {
    __fr_grid_lg_0__: {
        display: 'none'
    },
    __fr_grid_lg_1__: {
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_2__: {
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_3__: {
        flex: '0 0 25%',
        maxWidth: '25%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_4__: {
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_5__: {
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_6__: {
        flex: '0 0 50%',
        maxWidth: '50%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_7__: {
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_8__: {
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_9__: {
        flex: '0 0 75%',
        maxWidth: '75%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_10__: {
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_11__: {
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_lg_12__: {
        flex: '0 0 100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
    }
};

queries['@media (min-width: 1200px)'] = {
    __fr_grid_xl_0__: {
        display: 'none'
    },
    __fr_grid_xl_1__: {
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_2__: {
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_3__: {
        flex: '0 0 25%',
        maxWidth: '25%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_4__: {
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_5__: {
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_6__: {
        flex: '0 0 50%',
        maxWidth: '50%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_7__: {
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_8__: {
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_9__: {
        flex: '0 0 75%',
        maxWidth: '75%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_10__: {
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_11__: {
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%',
        boxSizing: 'border-box'
    },
    __fr_grid_xl_12__: {
        flex: '0 0 100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
    }
};

var css = Object.keys(basic).map(function (cls) {
    return '.' + cls + _fsts.JS.styleToCss(basic[cls]);
}).join('');

Object.keys(queries).forEach(function (key) {
    var styles = queries[key];
    css += key + '{' + Object.keys(styles).map(function (cls) {
        return '.' + cls + _fsts.JS.styleToCss(styles[cls]);
    }).join('') + '}';
});

var style = function style(props) {
    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } });
};

exports.default = style;