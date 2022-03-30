const routePrefix = location.host === 'byjs-dev.github.io' ? '/webcomponents-intro' : '';
const pages = ['/', '/basics.html', '/shadow-dom.html', '/templates-and-slots.html'];
const routes = pages.map((page) => `${routePrefix}${page}`);
export default routes;
