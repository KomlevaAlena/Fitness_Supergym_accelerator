import './vendor/focus-visible-polyfill';
// import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import {slider} from './modules/slider';
import {slider2} from './modules/slider';
import {initVideo} from './modules/video';

window.addEventListener('DOMContentLoaded', () => {

  // iosVhFix();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    slider.init();
    slider2.init();
    initTabs();
    initAccordions();
    initVideo();
  });
});
