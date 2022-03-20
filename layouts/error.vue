<template>
  <div class="flex flex-col items-center my-56">
    <h1 class="text-6xl text-gray-500">{{error.statusCode}}</h1>
    <h5 class="font-bold text-2xl">{{error.message}}</h5>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend ({
  name: "error",
  props: ['error'],
  head () {
    return {
      title: this.error.statusCode
    }
  },
  created() {
    this.addAlert()
  },
  updated() {
    this.addAlert()
  },
  methods: {
    addAlert() {
      this.$store.commit('alerts/addAlert', {
        color: 'danger',
        id: Math.random().toString().substring(2,10),
        title: 'Error',
        message: this.error.message
      })
    }
  }
})
</script>

<style scoped>

</style>
