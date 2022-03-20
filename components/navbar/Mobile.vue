<template>
  <div class="md:hidden">
    <div v-if="!isOpen" style="position: fixed; bottom: 16px; right: 16px; z-index: 10000" @click.stop="setMobileNavbarState(true)">
      <v-btn fab><v-icon>mdi-menu</v-icon></v-btn>
    </div>
    <div v-if="isOpen">
      <v-navigation-drawer
        fixed
        permanent
        width="100%"
      >
        <v-list v-if="loggedIn && user">
          <div style="position: absolute; top: 16px; right: 16px; z-index: 10000" @click.stop="setMobileNavbarState(false)">
            <v-icon>mdi-close</v-icon>
          </div>
          <v-list-item>
            <v-list-item-avatar color="purple">
              <v-icon>
                mdi-account-circle
              </v-icon>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item link @click.stop="openProfile()">
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{user.name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider v-if="loggedIn"></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item link v-for="(navItem, index) of navItems" :key="index" :id="navItem.id" :to="navItem.to" @click.stop="setMobileNavbarState(false)">
            <v-list-item-icon>
              <v-icon>{{'mdi-' + navItem.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title><span class="pl-2">{{navItem.name}}</span></v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="!loggedIn" @click="login()">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="loggedIn" @click="logout()">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend ({
  name: "index",
  async fetch() {
    this.navItems = (await this.$content('config').fetch()) as []
  },
  data () {
    return {
      navItems: []
    }
  },
  methods: {
    setMobileNavbarState(payload: boolean) {
      console.log(payload);
      this.$store.commit('navbar/setOpenMobileNavbar', payload)
    },
    async login (): Promise<void> {
      await this.$auth.loginWith('auth0')
    },
    async logout (): Promise<void> {
      await this.$auth.logout();
    },
    openProfile(): void {
      this.$store.commit('navbar/setOpenProfileNavbar', true)
    }
  },
  computed: {
    loggedIn(): Boolean {
      return this.$store.state.auth.loggedIn
    },
    user(): PublicKeyCredentialUserEntity {
      return this.$store.state.auth.user
    },
    isOpen(): Boolean {
      return this.$store.state.navbar.mobileNavbarOpen;
    },
    active: {
      get (): Boolean {
        return this.$store.state.navbar.activated
      },
      set (active: string): void {
        this.$store.commit('navbar/setNewActivatedRoute', active.toLowerCase())
      }
    }
  }
})
</script>

<style scoped>

</style>
