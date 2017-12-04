export const undefinedThen = (val, defVal) => {
    return typeof val === 'undefined' ? defVal : val;
};