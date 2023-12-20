<template>
  <div id="nav">
    <AppLink id="logo" to="/">Travel App</AppLink>
    <AppLink to="/about">About</AppLink>
    <AppLink v-for="destination in  destinations" :key="destination.id"
      :to="{ name: 'destination.details', params: { id: destination.id, slug: destination.slug } }">

      {{ destination.name }}

    </AppLink>
    <AppLink to="/protected">DashBoard</AppLink>
    <AppLink to="https://FalsePositives.com">FalsePositives</AppLink>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      destinations: sourceData.destinations
    };
  },
  // components: { AppLink, AppLink }
}
</script>

