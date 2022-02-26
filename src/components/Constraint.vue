<template>
  <div id="wrapper">
      <div id="constraint">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

#constraint {
    width: 100%;
    max-width: 800px;
    padding: 10px;
}
</style>