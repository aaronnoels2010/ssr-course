interface LoadingState {
  isLoading: boolean
}

export const state = () => ({
  isLoading: false
})

export const mutations = {
  isLoading(state: LoadingState, isLoading: boolean) {
    state.isLoading = isLoading
  }
}
