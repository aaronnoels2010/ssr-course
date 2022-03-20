<template>
  <div>
    <div v-if="!loggedIn" class="flex">
      <v-btn flat @click.stop="login">Login</v-btn>
      <v-btn @click="login">Signup</v-btn>
    </div>
    <div v-if="loggedIn" class="m-2 flex items-center" @click.stop="handleOpenSidebarProfile">
      <v-avatar>
        <img src="~/assets/icons/user.svg">
      </v-avatar>
      <p class="ml-4 font-bold">Hey, {{user.name}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend ({
  name: "Profile",
  computed: {
    loggedIn(): Boolean {
      return this.$store.state.auth.loggedIn
    },
    user(): PublicKeyCredentialUserEntity {
      return this.$store.state.auth.user
    }
  },
  methods: {
    async login (): Promise<void> {
      await this.$auth.loginWith('auth0')
    },
    handleOpenSidebarProfile (): void {
      this.$store.commit('navbar/setOpenProfileNavbar', true);
    }
  }
})
</script>

<style scoped>

</style>
