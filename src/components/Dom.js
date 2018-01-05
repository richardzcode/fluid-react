import React from 'react';

import { withMediaQuery } from '../css';
import { JS } from 'fsts';

const _Div = (props) => (
    <div {...props}>{props.children}</div>
)
const Div = withMediaQuery(_Div);

const _P = (props) => (
    <p {...props}>{props.children}</p>
)
const P = withMediaQuery(_P);

const _Span = (props) => (
    <span {...props}>{props.children}</span>
)
const Span = withMediaQuery(_Span);

const _Label = (props) => (
    <label {...props}>{props.children}</label>
)
const Label = withMediaQuery(_Label);

const _Ul = (props) => (
    <ul {...props}>{props.children}</ul>
)
const Ul = withMediaQuery(_Ul);

const _Li = (props) => (
    <li {...props}>{props.children}</li>
)
const Li = withMediaQuery(_Li);

const _Section = (props) => (
    <section {...props}>{props.children}</section>
)
const Section = withMediaQuery(_Section);

const _Header = (props) => (
    <header {...props}>{props.children}</header>
)
const Header = withMediaQuery(_Header);

const _Footer = (props) => (
    <footer {...props}>{props.children}</footer>
)
const Footer = withMediaQuery(_Footer);

const _Form = (props) => (
    <form {...props}>{props.children}</form>
)
const Form = withMediaQuery(_Form);

const _Input = (props) => (
    <input {...props}>{props.children}</input>
)
const Input = withMediaQuery(_Input);

const _Textarea = (props) => (
    <textarea {...props}>{props.children}</textarea>
)
const Textarea = withMediaQuery(_Textarea);

const _Select = (props) => (
    <select {...props}>{props.children}</select>
)
const Select = withMediaQuery(_Select);

const _Option = (props) => (
    <option {...props}>{props.children}</option>
)
const Option = withMediaQuery(_Option);

const _Button = (props) => (
    <button {...props}>{props.children}</button>
)
const Button = withMediaQuery(_Button);

const _Pre = (props) => (
    <pre {...props}>{props.children}</pre>
)
const Pre = withMediaQuery(_Pre);

const _Code = (props) => (
    <code {...props}>{props.children}</code>
)
const Code = withMediaQuery(_Code);

const _Article = (props) => (
    <article {...props}>{props.children}</article>
)
const Article = withMediaQuery(_Article);

const _Aside = (props) => (
    <aside {...props}>{props.children}</aside>
)
const Aside = withMediaQuery(_Aside);

const _Img = (props) => (
    <img {...props}>{props.children}</img>
)
const Img = withMediaQuery(_Img);

const _Canvas = (props) => (
    <canvas {...props}>{props.children}</canvas>
)
const Canvas = withMediaQuery(_Canvas);

const _Audio = (props) => (
    <audio {...props}>{props.children}</audio>
)
const Audio = withMediaQuery(_Audio);

const _Video = (props) => (
    <video {...props}>{props.children}</video>
)
const Video = withMediaQuery(_Video);

const _A = (props) => (
    <a {...props}>{props.children}</a>
)
const A = withMediaQuery(_A);

const _H1 = (props) => (
    <h1 {...props}>{props.children}</h1>
)
const H1 = withMediaQuery(_H1);

const _H2 = (props) => (
    <h2 {...props}>{props.children}</h2>
)
const H2 = withMediaQuery(_H2);

const _H3 = (props) => (
    <h3 {...props}>{props.children}</h3>
)
const H3 = withMediaQuery(_H3);

const _H4 = (props) => (
    <h4 {...props}>{props.children}</h4>
)
const H4 = withMediaQuery(_H4);

const _H5 = (props) => (
    <h5 {...props}>{props.children}</h5>
)
const H5 = withMediaQuery(_H5);

const _H6 = (props) => (
    <h6 {...props}>{props.children}</h6>
)
const H6 = withMediaQuery(_H6);

const _Hr = (props) => (
    <hr {...props}>{props.children}</hr>
)
const Hr = withMediaQuery(_Hr);

export {
    Div,
    P,
    Span,
    Label,
    Ul,
    Li,
    Section,
    Header,
    Footer,
    Form,
    Input,
    Textarea,
    Select,
    Option,
    Button,
    Pre,
    Code,
    Article,
    Aside,
    Img,
    Canvas,
    Audio,
    Video,
    A,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Hr
};
