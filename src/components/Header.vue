<template>
    <div id="header">
        <router-link v-for="route in routes" :key="route.name" :to="route.path">
            {{ route.name }}
        </router-link>
    </div>

    <div>
        <img id="wave" src="../assets/wave.png" alt="" />
    </div>

    <div id="name">
        Luke_

        <div id="sub-name">
            A developer passionate about learning
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.routes)
    },

    computed: {
        routes() {
            return this.$router.getRoutes()
        }
    }
}    
</script>

<style scoped>
#header {
    display: inline-flex;
    width: 100%;
    background: rgb(37, 34, 44);
    box-shadow: 0px 1px 8px 5px rgba(12, 12, 12, 0.75);
    justify-content: center;
    height: 45px;
    position: sticky;
    top: 0;
}

a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    width: 60px;
    text-align: center;
}

a.router-link-active {
    border-bottom: 5px solid rgb(114, 163, 172);
}

a:hover {
    background: rgba(0, 0, 0, 0.2)
}

#wave {
  width: 100%;
  height: 250px;
  position: relative;
  z-index: -10;
}

#name {
  color: #ccc;
  margin-top: -200px;
  margin-bottom: 200px;
  font-size: 30px;
  display: grid;
  justify-content: center;
  width: 100%;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
}

#sub-name {
  color: #666;
  font-size: 20px;
}
</style>