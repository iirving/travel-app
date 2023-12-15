<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout">logout</button>

  </div>
</template>

<script>
export default {
  name: 'Protected',
  data() {
    return {
      username: window.user
    }
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: 'Home' })
    }
  }
}

</script>


