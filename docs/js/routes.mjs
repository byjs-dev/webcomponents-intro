const routePrefix = location.host === 'byjs-dev.github.io' ? '/webcomponents-intro' : '';
const pages = [
    '/',
    '/basics.html',
    '/custom-elements.html',
    '/shadow-dom.html',
    '/templates-and-slots.html',
    '/flaws-of-web-components.html',
];
const routes = pages.map((page) => `${routePrefix}${page}`);
export default routes;
