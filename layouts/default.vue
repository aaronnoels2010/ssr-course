<template>
  <div class="app-container flex flex-col">
    <Loading v-if="isLoading"></Loading>
    <DialogProfile></DialogProfile>
    <AlertContainer></AlertContainer>
    <div class="flex flex-grow">
      <NavbarDesktop></NavbarDesktop>
      <NavbarMobile></NavbarMobile>
      <div class="flex-grow">
        <div class="pl-0 md:pl-14">
          <v-breadcrumbs v-if="items && items.length > 0" :items="items">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item
                :to="item.to"
                :disabled="item.disabled"
              >
                {{ item.text.toUpperCase() }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
          <v-divider></v-divider>
        </div>
        <div class="mt-8 m-4">
          <v-main>
            <Nuxt></Nuxt>
          </v-main>
        </div>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "default",
  data() {
    return {
      items: []
    }
  },
  computed: {
    isLoading(): Boolean {
      return this.$store.state.loading.isLoading
    }
  },
  mounted() {
    this.createBreadcrumb(this.$route.path)
  },
  watch:{
    $route (to, from){
      this.createBreadcrumb(to.path)
    }
  },
  methods: {
    createBreadcrumb(path: string) {
      this.items = ['home']
        .concat(path.split('/'))
        .filter(value => value !== '')
        .map(value => { return {
          disabled: false,
          exact: true,
          to: value === 'home' ? '/': `/${value}`,
          text: value
        }}) as []
    },
    openMobileNavbar(): void {
      this.$store.commit('navbar/setOpenMobileNavbar', true)
    }
  }
})
</script>

<style scoped>
.app-container {
  width: 100vw;
  min-height: 100vh;
  overflow-y: hidden;
}
</style>
