<template>
  <section v-if="destination" :class="destination.name.toLowerCase()" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }} </p>
    </div>

    <ul v-if="experiences" class="experience">
      <li v-for="experience in experiences" :key="experience.id">
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
import { stringifyQuery } from 'vue-router'

export default {
  name: "DestinationDetails",
  props: {
    id: {
      type: Number,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      experiences: null
    }
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        destination => destination.id === this.id
      )
    },

  },
  methods: {
    async fetchExperiences() {
      const detailsUrl = `https://travel-dummy-api.netlify.app/${this.slug}.json`
      const response = await fetch(detailsUrl)
      const data = await response.json()
      this.experiences = data.experiences
    }
  },
  async created() {
    this.fetchExperiences()
    this.$watch(() => this.$route.params, this.fetchExperiences)
  }

}


</script>
