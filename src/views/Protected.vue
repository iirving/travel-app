<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout">logout</button>
    <br><br>
    <button>
      <router-link :to="{ name: 'Invoices' }">Invoices</router-link>
    </button>

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
      this.$router.push({ name: 'Home', hash: '#logout', query: { logout: true } })
    }
  }
}

</script>


