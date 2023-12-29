<template>
  <div class="home">

    <h1>All destinations</h1>

    <div class="destinations">
      <router-link v-for="destination in  destinations" :key="destination.id"
        :to="{ name: 'destination.details', params: { id: destination.id, slug: destination.slug } }">
        <h2>
          {{ destination.name }}
          <img :src="`/images/${destination.image}`" :alt="destination.name" />
        </h2>
      </router-link>
    </div>
    <div v-if="isLoggedIn">
      <button @click="triggerRouterError">Trigger & Log Router Error</button>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import { isNavigationFailure, NavigationFailureType } from "vue-router"

export default {
  data() {
    return {
      destinations: sourceData.destinations,
      username: window.user
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.username
    }
  },
  methods: {
    async triggerRouterError() {
      const navigationFailure = await this.$router.push({ name: 'Home' })
      if (isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)) {
        console.log('navigationFailure to', navigationFailure.to)
        console.log('navigationFailure from', navigationFailure.from)
      } else { //all is well hopefully
      }


    }
  }

}
</script>
