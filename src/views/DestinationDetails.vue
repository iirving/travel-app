<template>
  <section :class="destination.name.toLowerCase()" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }} </p>
    </div>

    <ul class="experience">
      <li v-for="experience in destination.experiences" :key="experience.id">
        <h3>
          {{ experience.name }}

        </h3>
        {{ experience.description }}
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
      </li>
    </ul>
  </section>
</template>


<script>
import sourceData from '@/data.json'

export default {
  name: "DestinationDetails",
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    },
    destination() {
      return sourceData.destinations.find(
        destination => destination.id === this.destinationId
      )
    }
  }
};


</script>
