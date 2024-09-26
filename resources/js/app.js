import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import Layout from './Pages/Layout.vue'
import AppHeader from './Components/AppHeader.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} | FFC Financeiro`,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      let page = pages[`./Pages/${name}.vue`]

      page.default.layout = page.default.layout || Layout

      return page
    },
    // resolve: (name) =>
    //     resolvePageComponent(
    //         `./Pages/${name}.vue`,
    //         import.meta.glob('./Pages/**/*.vue'),
    //     ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            // .use(ZiggyVue)
            .component('AppHeader', AppHeader)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});




// import AppHeader from './Components/AppHeader.vue'

// createInertiaApp({
  // resolve: name => {
  //   const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
  //   let page = pages[`./Pages/${name}.vue`]

  //   page.default.layout = page.default.layout || Layout

  //   return page
  // },
//   setup({ el, App, props, plugin }) {
//     createApp({ render: () => h(App, props) })
//       .use(plugin)
//       .component('AppHeader', AppHeader)
//       .mount(el)
//   },
//   title: title => `FFC Financeiro | ${title}`,
// })
