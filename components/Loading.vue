<template>
  <v-overlay :value="true">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
export default {
  name: "Loading"
}
</script>

<style scoped>

</style>
