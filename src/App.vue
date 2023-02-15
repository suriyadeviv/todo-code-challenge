<template>
  <RouterView />
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
  display: block;
  position: relative;
  min-height: 40px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: lightgrey;
}
</style>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
