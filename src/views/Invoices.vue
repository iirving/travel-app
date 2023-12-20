<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router';

export default {
  name: 'Invoices',
  setup() {
    onBeforeRouteLeave((to, from, next) => {
      const answer = window.confirm('Do you really want to leave?')
      return answer ? next() : next(false)
    })
  }
}
</script>
