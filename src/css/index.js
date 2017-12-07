import { withMediaQuery } from './MediaQuery';
import { withPseudo } from './Pseudo';

export * from './MediaQuery';
export * from './Pseudo';
export { default as Breakpoint } from './Breakpoint';

export function withCss(Comp) {
    return withPseudo(withMediaQuery(Comp));
}
