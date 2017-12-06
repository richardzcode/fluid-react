import React from 'react';

export const codeSnippet = (src) => {
    const style = {
        textAlign: 'left',
        backgroundColor: '#eee',
        margin: 0,
        padding: '1rem',
        marginBottom: '1rem',
        overflow: 'auto'
    }
    return <pre style={style}>{src}</pre>
}
