import Vue from 'vue';
Vue.use(require('vue-resource'));
import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const planetsCache = Object.create(null);
const planets = new EventEmitter();
const planetsBaseUrl = 'http://swapi.co/api/planets/';
export default planets;

planets.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    if (planetsCache[id]) {
      resolve(planetsCache[id]);
    }
    const planetsToGet = `${planetsBaseUrl}${id}/`;
    Vue.http.get(planetsToGet).then(response => {
      const planetsData = planetsCache[id] = response.data;
      resolve(planetsData);
    }, reject);
  });
};
