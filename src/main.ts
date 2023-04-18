import App from './App.vue';
import { createSSRApp } from 'vue';
import { createRouter } from './router';

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  app.directive('inner-html', {
    beforeMount(el, binding) {
      el.innerHTML = 'client side';
    },
    getSSRProps(binding, vnode) {
      console.log('the binding:', binding);
      return { innerHTML: 'SSR rendered string' };
    },
  });
  return { app, router };
}
