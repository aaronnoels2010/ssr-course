<template>
  <div class="flex flex-col items-center">
    <h3 class="text-4xl text-gray-500">Overview</h3>
    <div class="rounded-lg shadow-md shrink overflow-hidden my-8">
      <img src="/images/overview-application.png" alt="overview">
    </div>
    <div class="text-sm flex items-center"><a :href="directoryUrl">{{directoryUrl}}</a></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      directoryUrl: "https://nuxtjs.org/docs/get-started/directory-structure"
    }
  },
  head () {
    return {
      title: "home"
    }
  },
  auth: 'guest'
})
</script>
