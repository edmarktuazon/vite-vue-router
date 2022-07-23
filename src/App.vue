<script setup>
import TheNavigation from "./components/TheNavigation.vue";

// export TheNavigation from '../components/TheNavigation.vue'
</script>


<template>
  <TheNavigation />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

