const H = {
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: '0.5rem'
};
const H1 = Object.assign({}, H, {
    fontSize: '2.5rem'
});
const H2 = Object.assign({}, H, {
    fontSize: '2rem'
});
const H3 = Object.assign({}, H, {
    fontSize: '1.5rem'
});

const Bootstrap = {
    navbar: {
        backgroundColor: '#563d7c',
        minHeight: '4rem',
        padding: '1rem',
        boxShadow: '0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (min-width: 768px)': {
            flexDirection: 'row'
        }
    },
    navBrand: {
        display: 'inline-block',
        padding: '.45rem .3125rem',
        fontSize: '1.25rem',
        whiteSpace: 'nowrap',
        color: '#eee',
        border: '1px solid #ccc',
        borderRadius: '5px',
        alignSelf: 'center'
    },
    navScroll: {
        maxWidth: '100%',
        height: '2.5rem',
        marginTop: '0.25rem',
        overflow: 'hidden'
    },
    navRight: {
        display: 'flex',
        maxWidth: '100%',
        height: '2.5rem',
        marginTop: '0.25rem',
        overflow: 'hidden',
        marginLeft: 'auto',
        '@media (max-width: 767px)': {
            position: 'absolute',
            top: '.25rem',
            right: 0
        }
    },
    navNav: {
        paddingLeft: '0',
        display: 'flex',
        listStyle: 'none',
        fontSize: '.875rem',
        color: '#cdbfe3',
        marginTop: '0.5rem',
        marginBottom: '0'
    },
    navItem: {
        padding: '0 0.5rem',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        '.active': {
            color: '#eee'
        }
    },
    navSidebar: {
        textAlign: 'left',
        overflow: 'hidden',
        padding: '0 1rem 1rem',
        borderRight: '1px solid #eee'
    },
    navSidebarNav: {
        paddingLeft: '0',
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        fontSize: '1rem',
        color: '#cdbfe3',
        marginTop: '0.5rem',
        marginBottom: '0'
    },
    navSidebarItem: {
        padding: '0 0.5rem',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        color: 'rgba(0,0,0,.65)',
        lineHeight: '2rem',
        '.active': {
            color: '#000',
            fontWeight: '500'
        }
    },

    icon: {
        fontSize: '1.5em',
        marginRight: '0.25em'
    },

    section: {
        marginTop: '1rem'
    },
    panel: {
        textAlign: 'left',
        padding: '0 1rem'
    },
    block: {
        textAlign: 'center',
        padding: '1rem'
    },

    code: {
        textAlign: 'left',
        backgroundColor: '#eee',
        margin: 0,
        padding: '0.5rem',
        lineHeight: '1.2em',
        marginBottom: '1rem',
        overflow: 'auto'
    },

    h1: H1,
    h2: H2,
    h3: H3
}

export default Bootstrap;
