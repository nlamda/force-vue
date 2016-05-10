import Vue from 'vue';
// Import router and components
import VueRouter from 'vue-router';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import ViewPerson from './components/ViewPerson';
import ViewPlanets from './components/ViewPlanets';

// Setup Vue to use Router
Vue.use(VueRouter);
// Intilized root component
const rootComponent = Vue.extend({});

const router = new VueRouter();
router.map({
  '/': {
    component: App,
    subRoutes: {
      '/': {
        component: ViewPerson,
      },
      '/person': {
        component: ViewPerson,
      },
      '/planets': {
        component: ViewPlanets,
      },
    },
  },
  '/about': {
    component: About,
  },
  '/contact': {
    component: Contact,
  },
});
router.redirect({
// redirect to home if not a correct route!
  '*': '/',
});
// Start view at id app
router.start(rootComponent, '#app');

