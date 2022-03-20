<template>
  <section class="p-8 mx-auto max-w-xl shadow-md rounded-lg" v-if="page">
    <div class="flex flex-col items-center">
      <h3 class="text-4xl text-gray-500">{{ page.title }}</h3>
      <img class="my-4 rounded-xl" :src="page.image" alt="image">
      <div class="w-full text-sm flex items-center"><v-icon class="mr-2">mdi-web</v-icon><a :href="page.source">{{page.source}}</a></div>
      <div class="w-full text-sm flex items-center"><v-icon class="mr-2">mdi-account</v-icon><span>{{page.author.name}}</span></div>
      <div class="w-full text-sm flex items-center"><v-icon class="mr-2">mdi-alarm</v-icon><span>{{page.published}}</span></div>
      <div class="w-full mt-4">
        <nuxt-content :document="page"/>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "index",
  head () {
    return {
      title: this.page.title
    }
  },
  async asyncData({$content, params, error}) {
    const page = (await $content(`articles/${params.slug}`).fetch().catch((err) => {
      error({message: `Page not found "${params.slug}".`, statusCode: 404})
    }))

    if (page) {  return {page: page[0]} }
  },
})
</script>

<style scoped>

</style>
