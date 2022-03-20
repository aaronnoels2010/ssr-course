<template>

</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend ({
  name: "logout",
  auth: "guest",
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$store.commit('alerts/addAlert', {
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
