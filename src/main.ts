import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import { router } from '@/router';
import { i18n } from '@/i18n';
import { OutsideClickDirective } from '@/directives/outsideClick';

createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .directive('click-outside', OutsideClickDirective)
  .mount('#app');
