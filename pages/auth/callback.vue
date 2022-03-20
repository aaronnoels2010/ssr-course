<template>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "callback",
  auth: "guest",
  computed: {
    loggedIn (): Boolean {
      return this.$store.state.auth.loggedIn;
    },
    user (): Boolean {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.$store.commit('loading/isLoading', true)
    const authenticationInterval: NodeJS.Timeout = setInterval(async () => this.configureAuthenticationResponse(authenticationInterval), 3000)
  },
  methods: {
    async configureAuthenticationResponse(interval: NodeJS.Timeout): Promise<void> {
      const authCallbackParts =
        this.$route.fullPath.split('#')[1].split('&')
      const accessTokenKeyValue = authCallbackParts.filter(value => value.startsWith("access_token"))[0];
      const accessToken = accessTokenKeyValue.split("=")[1]
      await this.$auth.setUserToken(accessToken);
      await this.$auth.fetchUser();
      this.$store.commit('loading/isLoading', false)
      this.$store.commit('alerts/addAlert', {
        color: 'success',
        id: Math.random().toString().substring(2,10),
        title: 'Logged in',
        message: 'You are successfully logged in.'
      })
      clearInterval(interval);
    }
  }
})
</script>

<style scoped>

</style>
