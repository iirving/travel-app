<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" placeholder="Username">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" placeholder="Password">
      <button type="submit">Login</button>

    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    isAuthenticated(username, password) {
      const validUser = 'ian'
      if (this.username === validUser) {
        window.user = username;
        return true;
      }
      window.user = null;
      this.username = "";
      return false
    },
    login() {
      if (this.username !== '') {
        if (this.isAuthenticated(this.username, this.password)) {
          const redirectPath = this.$route.query.redirect || '/Protected'
          this.$router.push(redirectPath)
        } else {
          this.$router.push({ name: 'Home' })
        }
      }
    }
  }
}
</script>
