<template>
  <v-overlay v-if="isOpen">
    <div class="flex">
      <v-card class="mx-4" min-width="240" max-width="600" :dark="false">
        <div style="position: absolute; top: 4px; right: 4px; z-index: 10000" @click.stop="close()">
          <v-icon>mdi-close</v-icon>
        </div>
        <v-card-title>
          <v-avatar color="#fff"><img :src="user.picture" alt="avatar"></v-avatar>
          <span class="ml-4">{{user.name}}</span>
        </v-card-title>
        <v-card-text>
          <span>{{user.nickname}}</span>
        </v-card-text>
      </v-card>
    </div>
  </v-overlay>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Profile",
  computed: {
    isOpen: {
      get (): Boolean {
        return this.$store.state.navbar.profileNavbarOpen
      },
      set (value): void {
        this.$store.commit('navbar/setOpenProfileNavbar', value)
      }
    },
    user(): PublicKeyCredentialUserEntity {
      return this.$store.state.auth.user
    }
  },
  methods: {
    close(): void {
      this.$store.commit('navbar/setOpenProfileNavbar', false)
    },
    logout (): void {
      this.$store.commit('navbar/setOpenProfileNavbar', false)
      this.$auth.logout()
    }
  }
})
</script>

<style scoped>

</style>
