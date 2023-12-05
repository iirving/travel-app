<script>

</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>bout

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 30000ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
