<template>
  <div style="position: absolute; top: 0; right: 0; z-index: 9005">
    <AlertItem v-for="alert in alerts" :key="alert.id" :alert="alert"></AlertItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Alert from "~/models/alert";

export default Vue.extend ({
  name: "Container",
  computed: {
    alerts (): Alert[] {
      return this.$store.state.alerts.alerts;
    }
  }
})
</script>

<style scoped>

</style>
