<template>
  <ul>
    <li>
      <router-link :to="{ name: 'Protected' }">DashBoard</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Invoices' }">Invoices</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  background: white;
  padding: 10px;
  list-style: none;
  margin-right: 20px;
}

li {
  margin: 10px;
}
</style>
