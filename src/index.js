import Navigation from './js/navigation.mjs';
import {ZFileUpload, ZButton} from '@zepdev/web-components-library/dist/package/index.js';
import ZepH2 from './js/ZepH2.mjs';
import ZepH3 from './js/ZepH3.mjs';

ZFileUpload.register();
ZButton.register();

window.addEventListener('DOMContentLoaded', Navigation.addListeners.bind(Navigation));
