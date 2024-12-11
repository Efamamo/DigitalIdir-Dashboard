import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faDesktop,
  faPlus,
  faLock,
  faUserShield,
  faCrown,
  faUsers,
  faNewspaper,
  faBullhorn,
  faCalendarAlt,
  faBox,
  faMonument,
  faExchangeAlt,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';

// Disable automatic addition of the CSS by FontAwesome
config.autoAddCss = false;

// Add specific icons to the library
library.add(
  faCoffee,
  faTwitter,
  faDesktop,
  faPlus,
  faLock,
  faUserShield,
  faCrown,
  faUsers,
  faNewspaper,
  faBullhorn,
  faCalendarAlt,
  faBox,
  faMonument,
  faExchangeAlt,
  faMinus
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
