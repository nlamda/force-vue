<template>
  <div class="mdl-grid portfolio-max-width">
    <div class="mdl-cell">
      <button class="mdl-button mdl-js-button mdl-button--raised" v-link="{ path: '/person' }">Person</button>
      <button class="mdl-button mdl-js-button mdl-button--raised" v-link="{ path: '/planets' }">Planets</button>
    </div>
  </div>
  <div class="mdl-grid portfolio-max-width">
    <router-view></router-view>
  </div>
</template>
