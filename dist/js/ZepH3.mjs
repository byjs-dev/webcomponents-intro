// Don't like IIFE? -> use as "module"
export default class ZepH3 extends HTMLElement {
    constructor() {
        super();
        console.log('little bäm! h3');
    }
}

customElements.define('zep-h3', ZepH3);



