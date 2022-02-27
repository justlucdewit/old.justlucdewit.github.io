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

.bold {
  font-weight: bold;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-weight: bold;
  background: rgb(114, 163, 172);
  border: none;
}

button {
  cursor: pointer;
  background: rgb(131, 176, 184);
}
</style>
