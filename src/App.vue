
<template>
  <TheNavigation />
  <div class="container">
    <br>
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation
  }
};

</script>


<style></style>
