<template>

</template>

<script>
import Vue from "vue";

export default Vue.extend ({
  name: "login",
  async mounted() {
    await this.$auth.loginWith('auth0')
  }
})
</script>

<style scoped>

</style>
