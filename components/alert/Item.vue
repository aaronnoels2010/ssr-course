<template>
  <div class="mt-2 mx-2">
    <v-alert       :v-model="true"
                   :type="alert.color"
                   dismissible
                   elevation="2"
                   shaped
                   prominent>
      <div class="ml-4">
        <h3 class="text-h3">{{ alert.title }}</h3>
        <span>{{ alert.message }}</span>
        <v-progress-linear :value="progress"></v-progress-linear>
      </div>
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue, {PropOptions} from "vue";
import Alert from "~/models/alert";

export default Vue.extend ({
  name: "Item",
  props: {
    alert: {
      type: Object
    } as PropOptions<Alert>
  },
  data() {
    return {
      active: true,
      time: 6000,
      progress: 0
    }
  },
  mounted() {
    const interval = setInterval(() => {
      this.progress++
    }, this.time / 100);

    setTimeout(() => {
      this.active = false
      this.$store.commit('alerts/removeAlert', this.alert.id)
      clearInterval(interval)
      this.progress = 0
    }, this.time);
  }
})
</script>

<style scoped>

</style>
