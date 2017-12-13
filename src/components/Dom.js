import React from 'react';

import { withMediaQuery } from '../css';
import { JS } from 'fsts';

const _Div = (props) => (
    <div {...props}>{props.children}</div>
)
const Div = withMediaQuery(_Div);

const _Span = (props) => (
    <span {...props}>{props.children}</span>
)
const Span = withMediaQuery(_Span);

const _Ul = (props) => (
    <ul {...props}>{props.children}</ul>
)
const Ul = withMediaQuery(_Ul);

const _Li = (props) => (
    <li {...props}>{props.children}</li>
)
const Li = withMediaQuery(_Li);

const _Input = (props) => (
    <input {...props}>{props.children}</input>
)
const Input = withMediaQuery(_Input);

const _Textarea = (props) => (
    <textarea {...props}>{props.children}</textarea>
)
const Textarea = withMediaQuery(_Textarea);

const _Button = (props) => (
    <button {...props}>{props.children}</button>
)
const Button = withMediaQuery(_Button);

const _Pre = (props) => (
    <pre {...props}>{props.children}</pre>
)
const Pre = withMediaQuery(_Pre);

const _A = (props) => (
    <a {...props}>{props.children}</a>
)
const A = withMediaQuery(_A);

export {
    Div,
    Span,
    Ul,
    Li,
    Input,
    Textarea,
    Button,
    Pre,
    A
};
