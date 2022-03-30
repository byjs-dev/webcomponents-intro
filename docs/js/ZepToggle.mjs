export default class ZepToggle extends HTMLButtonElement {
    #toggleValue;

    constructor() {
        super();
        this.addEventListener('click', e => this.toggle());
    }

    connectedCallback() {
        this.style.color   = 'white';
        this.style.padding = '0.5em';
        this.toggle();
    }

    toggle() {
        this.#toggleValue          = !this.#toggleValue;
        this.style.backgroundColor = this.#toggleValue ? 'green' : 'darkred';
    }

}
customElements.define('zep-toggle', ZepToggle, {extends: 'button'});
