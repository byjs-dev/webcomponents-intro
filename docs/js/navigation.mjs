import {paths} from './routes.mjs';

// don't do that primitive stuff at work ;)

export default class Navigation {

    static #elementListeners = [];

    static next() {
        const currentRoutesIndex = paths.indexOf(location.pathname);
        if (currentRoutesIndex === -1) return;
        const nextIndex = currentRoutesIndex === paths.length - 1 ? 0 : currentRoutesIndex + 1;
        window.open(paths[nextIndex], '_self');
        return this;
    }

    static prev() {
        const currentRoutesIndex = paths.indexOf(location.pathname);
        if (currentRoutesIndex === -1) return;
        const prevIndex = currentRoutesIndex > 0 ? currentRoutesIndex - 1 : paths.length - 1;
        window.open(paths[prevIndex], '_self');
        return this;
    }

    static addListeners() {
        Navigation.removeListeners();
        window.addEventListener('keydown', Navigation.handleKeyDown);
        document.querySelectorAll('[data-navigation]').forEach((element) => {
            const listener = {element, event: 'click', callback: Navigation[element.dataset.navigation]};
            listener.element.addEventListener(listener.event, listener.callback);
            this.#elementListeners.push(listener);
        });
        return this;
    }

    static removeListeners() {
        window.removeEventListener('keydown', Navigation.handleKeyDown);
        this.#elementListeners.forEach((listener) => {
            listener.element.removeEventListener(listener.event, listener.callback);
        });
        this.#elementListeners = [];
        return this;
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
        return this;
    }

    static setHomeUrl() {
        if(location.pathname !== paths[0]){
            const homeButton = document.getElementById('wc-button-home');
            homeButton?.setAttribute('href', paths[0]);
        }
        return this;
    }
}
Navigation.addListeners().setHomeUrl();
