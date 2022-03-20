<template>
  <div class="flex flex-col items-center my-56">
    <NuxtLink to="/">Go to home page</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend ({
  name: "logout",
  auth: "guest",
  asyncData({store, $auth, redirect}) {
    if (!$auth.loggedIn) {
      store.commit('alerts/addAlert', {
        color: 'error',
        id: Math.random().toString().substring(2,10),
        title: 'Logged out',
        message: 'You are successfully logged out'
      })
    }
  }
})
</script>

<style scoped>

</style>
