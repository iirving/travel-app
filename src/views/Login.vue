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
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const route = useRoute();
    const router = useRouter();

    const login = () => {
      let redirectPath = { name: 'Home' }
      if (username.value !== '') {
        if (isAuthenticated(username.value, password.value)) {
          redirectPath = route.query.redirect || '/Protected'
        }
        router.push(redirectPath)
      }
    }

    const isAuthenticated = (username, password) => {
      const validUser = 'ian'
      // a better way to do this would be to use a service to authenticate
      if (username === validUser) {
        window.user = username;
        return true;
      }
      window.user = null;
      username = "";
      return false
    }

    return { username, password, login }
  }
}
</script>
