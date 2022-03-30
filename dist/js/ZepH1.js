// Why use IIFE? -> Avoids global variable namespace conflicts
(function() {
    class ZepH1 extends HTMLElement {
        constructor() {
            // Always call super first in constructor
            super();
            console.log('bäm! h1');
        }
    }

    customElements.define('zep-h1', ZepH1);
})();


