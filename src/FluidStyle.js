export const Container = {
}

export const Row = {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative'
}

export const Col = {
    flex: '1 0 0',
    maxWidth: '100%',
    boxSizing: 'border-box'
}

export const ColAuto = {
    flex: '0 0 auto',
    maxWidth: '100%',
    width: 'auto',
    boxSizing: 'border-box'
}

export const Col0 = {
    display: 'none'
}

export const Col1 = {
    flex: '0 0 8.33333333%',
    maxWidth: '8.33333333%',
    boxSizing: 'border-box'
}

export const Col2 = {
    flex: '0 0 16.66666667%',
    maxWidth: '16.66666667%',
    boxSizing: 'border-box'
}

export const Col3 = {
    flex: '0 0 25%',
    maxWidth: '25%',
    boxSizing: 'border-box'
}

export const Col4 = {
    flex: '0 0 33.33333333%',
    maxWidth: '33.33333333%',
    boxSizing: 'border-box'
}

export const Col5 = {
    flex: '0 0 41.66666667%',
    maxWidth: '41.66666667%',
    boxSizing: 'border-box'
}

export const Col6 = {
    flex: '0 0 50%',
    maxWidth: '50%',
    boxSizing: 'border-box'
}

export const Col7 = {
    flex: '0 0 58.33333333%',
    maxWidth: '58.33333333%',
    boxSizing: 'border-box'
}

export const Col8 = {
    flex: '0 0 66.66666667%',
    maxWidth: '66.66666667%',
    boxSizing: 'border-box'
}

export const Col9 = {
    flex: '0 0 75%',
    maxWidth: '75%',
    boxSizing: 'border-box'
}

export const Col10 = {
    flex: '0 0 83.33333333%',
    maxWidth: '83.33333333%',
    boxSizing: 'border-box'
}

export const Col11 = {
    flex: '0 0 91.66666667%',
    maxWidth: '91.66666667%',
    boxSizing: 'border-box'
}

export const Col12 = {
    flex: '0 0 100%',
    maxWidth: '100%',
    boxSizing: 'border-box'
}

export const W100 = {
    width: '100%'
}

const FluidStyle = {
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
}

export default FluidStyle;
