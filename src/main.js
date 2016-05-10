import Vue from 'vue';
import VueRouter from 'vue-router';
import Apps from './App';
import About from './components/About';
import Contact from './components/Contact';
Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/': {
    component: Apps,
  },
  '/about': {
    component: About,
  },
  '/contact': {
    component: Contact,
  },
});

const App = Vue.extend({});
router.start(App, '#app');
