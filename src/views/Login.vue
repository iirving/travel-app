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
    login() {
      // fake authication
      window.user = this.username;
      if (this.username === 'ian') {
        const redirectPath = this.$route.query.redirect || '/Protected'
        console.log('redirectPath', redirectPath, 'username', this.username);
        this.$router.push(redirectPath)
      } else {
        window.user = null;
        this.username = "";
        this.$router.push({ name: 'Home' })

      }
    }
  }
}
</script>
