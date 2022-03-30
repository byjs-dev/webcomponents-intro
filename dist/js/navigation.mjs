import routes from './routes.mjs';

// don't do that primitive stuff at work ;)

export default class Navigation {

    static #elementListeners = [];

    static next() {
        const currentRoutesIndex = routes.indexOf(location.pathname);
        if (currentRoutesIndex === -1) return;
        const nextIndex = currentRoutesIndex === routes.length - 1 ? 0 : currentRoutesIndex + 1;
        window.open(routes[nextIndex], '_self');
    }

    static prev() {
        const currentRoutesIndex = routes.indexOf(location.pathname);
        if (currentRoutesIndex === -1) return;
        const prevIndex = currentRoutesIndex > 0 ? currentRoutesIndex - 1 : routes.length - 1;
        window.open(routes[prevIndex], '_self');
    }

    static addListeners() {
        Navigation.removeListeners();
        window.addEventListener('keydown', Navigation.handleKeyDown);
        document.querySelectorAll('[data-navigation]').forEach((element) => {
            const listener = {element, event: 'click', callback: Navigation[element.dataset.navigation]};
            listener.element.addEventListener(listener.event, listener.callback);
            this.#elementListeners.push(listener);
        });
    }

    static removeListeners() {
        window.removeEventListener('keydown', Navigation.handleKeyDown);
        this.#elementListeners.forEach((listener) => {
            listener.element.removeEventListener(listener.event, listener.callback);
        });
        this.#elementListeners = [];
    }

    static handleKeyDown(e) {
        if (e.defaultPrevented) return;

        switch (e.key) {
            case 'Left':
            case 'ArrowLeft':
                Navigation.prev();
                break;
            case 'Right':
            case 'ArrowRight':
                Navigation.next();
                break
        }
    }
}
Navigation.addListeners();
