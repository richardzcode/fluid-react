import { withMediaQuery } from './MediaQuery';
import { withBeforeAfter } from './BeforeAfter';
import { withHover } from './Hover';

export { default as Match } from './Match';

function withPseudo(Comp) {
    return withBeforeAfter(withHover(Comp));
}

function withCss(Comp) {
    return withPseudo(withMediaQuery(Comp));
}

export { withMediaQuery, withBeforeAfter, withHover, withPseudo, withCss };
