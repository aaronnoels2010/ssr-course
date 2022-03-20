<template>
  <div class="hidden md:block">
    <v-navigation-drawer
      fixed
      permanent
      expand-on-hover
    >
      <v-list v-if="loggedIn && user">
        <v-list-item style="padding-left: 8px; padding-right: 8px">
          <v-list-item-avatar color="#fff">
            <img :src="user.picture" alt="avatar">
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
        <v-list-item link v-for="(navItem, index) of navItems" :key="index" :id="navItem.id" :to="navItem.to">
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
    async goToHomePage (): Promise<void> {
      console.log(await  this.$content('config').fetch())
      this.$router.push('/')
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
