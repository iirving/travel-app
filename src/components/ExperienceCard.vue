<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <span class="card__text">
      {{ experience.name }}
      <!-- {{ experience.description }} -->
    </span>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
}
</script>
