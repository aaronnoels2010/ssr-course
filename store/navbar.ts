import DevelopmentLogging from "@/utils/logging";

interface NavbarState {
  activated: string
  mobileNavbarOpen: Boolean
  profileNavbarOpen: Boolean
}

export const state = () => ({
  mobileNavbarOpen: false,
  profileNavbarOpen: false,
  activated: "home"
})

export const mutations = {
  setOpenMobileNavbar(state: NavbarState, open: Boolean) {
    state.mobileNavbarOpen = open
  },

  setOpenProfileNavbar(state: NavbarState, open: Boolean) {
    mutations.setOpenMobileNavbar(state, false);
    state.profileNavbarOpen = open
  },

  setNewActivatedRoute(state: NavbarState, path: string) {
    DevelopmentLogging(`Set activated to ${path}`)
    if (path !== '') {
      state.activated = path;
    }
  }
}
