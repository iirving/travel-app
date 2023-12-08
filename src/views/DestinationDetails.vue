<template>
  <section v-if="destination" :class="destination.name.toLowerCase()" class="destination">
    <h1>{{ destination.name }}</h1>
    <GoBack />

    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }} </p>
    </div>
  </section>

  <section v-if="experiences" class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <p>Check out these awesome experiences</p>
    <div class="cards">
      <router-link v-for="experience in experiences" :key="experience.slug" :to="{
        name: 'experience.details',
        params: {
          experienceSlug: experience.slug,
          id: destination.id
        }
      }" :title="experience.name" :aria-label="`View details for ${experience.name}`">
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
    <router-view />
  </section>
</template>

<script>
import sourceData from '@/data.json'
import { stringifyQuery } from 'vue-router'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'

export default {
  name: "DestinationDetails",
  components: {
    ExperienceCard,
    GoBack
  },
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
