<template>
  <Header />

  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  color: #ccc;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
}

body {
  background: rgb(28, 33, 41);
  padding-bottom: 50px;  
}

hr {
  border-top: 1px solid #555;
}
</style>
