import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faYoutubeSquare, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faSpotify);
library.add(faInstagram);
library.add(faYoutubeSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
