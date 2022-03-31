const template = document.createElement('template');

template.innerHTML = `
    <style>
        :host {
            color: darkred;
            font-weight: bold;
            font-family: Arial, sans-serif;
        }
        :host([size="s"]) {
            font-size: .75rem;
        }
        :host([size="m"]) {
            font-size: 1rem;
        }
        :host([size="l"]) {
            font-size: 1.5rem;
        }
        :host([size="xl"]) {
            font-size: 2rem;
        }
    </style>
    <slot></slot>
`;

export default class ZepHeadline extends HTMLElement {

    static get observedAttributes() {
        return ['size'];
    }

    #size = 'm';

    set size(value) {
        this.setAttribute('size', value);
    }

    get size() {
        return this.getAttribute('size') || this.#size;
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        ZepHeadline.observedAttributes.forEach((attr) => this.#upgradeProperty(attr));
        console.log('ZepHeadline element added to page.');
    }

    disconnectedCallback() {
        console.log('ZepHeadline element removed from page.');
    }

    adoptedCallback() {
        console.log('ZepHeadline element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`ZepHeadline element attribute ${name} changed from ${oldValue} to ${newValue}.`);

        //newValue = utils.stripTags(newValue);

        if (newValue !== oldValue) {
            this.#size = newValue;
        }
    }

    #upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
        return this;
    }
}
customElements.define('zep-headline', ZepHeadline);
