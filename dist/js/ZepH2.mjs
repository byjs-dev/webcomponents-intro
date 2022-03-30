// Don't like IIFE? -> use as "module"

// No SHADOW DOM - no scoped styles -> style tag inside body works mostly - but is invalid HTML
// Please don't do that
const template = document.createElement('template');
template.innerHTML = `
<style>
    zep-h2 {
        font-size: 1rem !important;
        font-weight: 400 !important;
    }
</style>
`;

export default class ZepH2 extends HTMLElement {
    constructor() {
        super();
        console.log('middle bäm! h2');

        // use cloneNode technique instead of setting innerHTML directly, to cut down parse costs -> template is only parsed once and not for each instance!
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('zep-h2', ZepH2);



