<template>
  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    <mdl-button class="randPlanetsBtn" v-mdl-ripple-effect colored icon raised v-on:click="fetchRandomPlanets">
      <i class="material-icons">face</i> Random Planet
    </mdl-button>
    <mdl-textfield floating-label="Name" :value.sync="planetsData.name"></mdl-textfield>
    <mdl-textfield floating-label="Rotational Period" :value.sync="planetsData.rotation_period"></mdl-textfield>
    <mdl-textfield floating-label="Orbital Period" :value.sync="planetsData.orbital_period"></mdl-textfield>
    <mdl-textfield floating-label="Diameter" :value.sync="planetsData.diameter"></mdl-textfield>
    <mdl-textfield floating-label="Climate" :value.sync="planetsData.climate"></mdl-textfield>
    <mdl-textfield floating-label="Gravity" :value.sync="planetsData.gravity"></mdl-textfield>
    <mdl-textfield floating-label="Terrain" :value.sync="planetsData.terrain"></mdl-textfield>
    <mdl-textfield floating-label="Surface Water" :value.sync="planetsData.surface_water"></mdl-textfield>
    <mdl-textfield floating-label="Population" :value.sync="planetsData.population"></mdl-textfield>
  </div>
</template>

<script>
  import planets from '../api/planets';
  import { MdlButton, MdlTextfield, directives } from 'vue-mdl';

  export default {
    components: {
      MdlButton,
      MdlTextfield,
    },
    directives,
    data() {
      return {
        planetsData: {
          name: '',
          rotation_period: '',
          orbital_period: '',
          diameter: '',
          climate: '',
          gravity: '',
          terrain: '',
          surface_water: '',
          population: '',
        },
      };
    },
    methods: {
      fetchRandomPlanets() {
        const randomPlanetId = Math.floor((Math.random() * 61) + 1);
        planets.fetch(randomPlanetId).then((planetsData) => {
          this.planetsData = Object.assign(this.planetsData, planetsData);
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: black;
  }
</style>
