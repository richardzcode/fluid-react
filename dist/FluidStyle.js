'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Container = exports.Container = {};

var Row = exports.Row = {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative'
};

var Col = exports.Col = {
    flex: '1 0 0',
    maxWidth: '100%',
    boxSizing: 'border-box'
};

var ColAuto = exports.ColAuto = {
    flex: '0 0 auto',
    maxWidth: '100%',
    width: 'auto',
    boxSizing: 'border-box'
};

var Col0 = exports.Col0 = {
    display: 'none'
};

var Col1 = exports.Col1 = {
    flex: '0 0 8.33333333%',
    maxWidth: '8.33333333%',
    boxSizing: 'border-box'
};

var Col2 = exports.Col2 = {
    flex: '0 0 16.66666667%',
    maxWidth: '16.66666667%',
    boxSizing: 'border-box'
};

var Col3 = exports.Col3 = {
    flex: '0 0 25%',
    maxWidth: '25%',
    boxSizing: 'border-box'
};

var Col4 = exports.Col4 = {
    flex: '0 0 33.33333333%',
    maxWidth: '33.33333333%',
    boxSizing: 'border-box'
};

var Col5 = exports.Col5 = {
    flex: '0 0 41.66666667%',
    maxWidth: '41.66666667%',
    boxSizing: 'border-box'
};

var Col6 = exports.Col6 = {
    flex: '0 0 50%',
    maxWidth: '50%',
    boxSizing: 'border-box'
};

var Col7 = exports.Col7 = {
    flex: '0 0 58.33333333%',
    maxWidth: '58.33333333%',
    boxSizing: 'border-box'
};

var Col8 = exports.Col8 = {
    flex: '0 0 66.66666667%',
    maxWidth: '66.66666667%',
    boxSizing: 'border-box'
};

var Col9 = exports.Col9 = {
    flex: '0 0 75%',
    maxWidth: '75%',
    boxSizing: 'border-box'
};

var Col10 = exports.Col10 = {
    flex: '0 0 83.33333333%',
    maxWidth: '83.33333333%',
    boxSizing: 'border-box'
};

var Col11 = exports.Col11 = {
    flex: '0 0 91.66666667%',
    maxWidth: '91.66666667%',
    boxSizing: 'border-box'
};

var Col12 = exports.Col12 = {
    flex: '0 0 100%',
    maxWidth: '100%',
    boxSizing: 'border-box'
};

var W100 = exports.W100 = {
    width: '100%'
};

var FluidStyle = {
    container: Container,

    row: Row,

    col: Col,
    colauto: ColAuto,
    col0: Col0,
    col1: Col1,
    col2: Col2,
    col3: Col3,
    col4: Col4,
    col5: Col5,
    col6: Col6,
    col7: Col7,
    col8: Col8,
    col9: Col9,
    col10: Col10,
    col11: Col11,
    col12: Col12,

    w100: W100
};

exports.default = FluidStyle;