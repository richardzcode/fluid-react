import { codeSnippet } from './Common';

export const ResponsiveColorCode = codeSnippet(`
    const CssDemoStyle = {
        responsiveColor: {
            margin: 'auto 1rem',
            padding: '2rem',
            color: '#fff',
            backgroundColor: '#0275d8',
            borderColor: '#0275d8',
            '@media (min-width: 576px) and (max-width: 767px)': {
                backgroundColor: '#5cb85c',
                borderColor: '#5cb85c'
            },
            '@media (min-width: 768px) and (max-width: 991px)': {
                backgroundColor: '#5bc0de',
                borderColor: '#5bc0de'
            },
            '@media (min-width: 992px) and (max-width: 1199px)': {
                backgroundColor: '#f0ad4e',
                borderColor: '#f0ad4e'
            },
            '@media (min-width: 1200px)': {
                backgroundColor: '#d9534f',
                borderColor: '#d9534f'
            }
        }
    }

    const Panel = (props) => (
        <div {...props} />
    )

    const ResponsiveColor = withMediaQuery(Panel);

    export default class Comp extends Component {
        render() {
            <ResponsiveColor style={CssDemoStyle.responsiveColor}>
                Color changes with width
            </ResponsiveColor>
        }
    }
`)

export const MobileDesktopCode = codeSnippet(`
    export default class Comp extends Component {
        constructor(props) {
            super(props);

            this.onBreakpoint = this.onBreakpoint.bind(this);

            this.state = {
                version: 'mobile'
            }
        }

        componentDidMount() {
            MediaQuery.listenBreakpoint(this.onBreakpoint);
        }

        componentWillUnmount() {
            MediaQuery.unlistenBreakpoint(this.onBreakpoint);
        }

        onBreakpoint(vw) {
            this.setState({
                version: ['xs', 'sm'].includes(vw)? 'mobile' : 'desktop'
            });
        }

        render() {
            {this.state.version === 'mobile'? <Mobile /> : <Desktop />}
        }
    }
`)

export const BrandCode = codeSnippet(`
    const BrandName = (props) => (
        <span {...props}>{props.children}</span>
    )

    export const Brand = withPseudo(BrandName);

    const brandStyle = {
        fontSize: '24px',
        verticalAlign: 'top',
        padding: '4px',
        '::before': {
            content: '',
            display: 'inline-block',
            width: '64px',
            height: '32px',
            backgroundImage: 'url(https://reactjs.org/logo-og.png)',
            backgroundSize: '64px 32px'
        }
    }

    export default class Comp extends Component {
        render() {
            <Brand style={brandStyle}>
                React
            </Brand>
        }
    }
`)

export const BreakpointBlocksCode = codeSnippet(`
    export const BreakpointBlocks = (props) => (
        <div>
            <Breakpoint show="xs,sm">xs, sm</Breakpoint>
            <Breakpoint show="md,lg">md,lg</Breakpoint>
            <Breakpoint show="xl">xl</Breakpoint>
        </div>
    )
`)
