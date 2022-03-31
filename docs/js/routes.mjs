export const prefix = location.host === 'byjs-dev.github.io' ? '/webcomponents-intro' : '';
const pages = [
    '/',
    '/basics.html',
    '/custom-elements.html',
    '/shadow-dom.html',
    '/templates-and-slots.html',
    '/flaws-of-web-components.html',
];
export const paths = pages.map((page) => `${prefix}${page}`);
