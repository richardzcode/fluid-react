const CssDemoStyle = {
    responsiveColor: {
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
    },
    brand: {
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
    },
    breakpointBlock: {
        backgroundColor: '#5bc0de',
        borderColor: '#5bc0de',
        color: '#fff',
        padding: '1rem'
    }
}

export default CssDemoStyle;
