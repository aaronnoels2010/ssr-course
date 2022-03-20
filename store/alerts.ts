import Alert from "@/models/alert";

interface AlertsState {
  alerts: Alert[]
}

export const state = () => ({
  alerts: []
})

export const mutations = {
  addAlert(state: AlertsState, alert: Alert) {
    state.alerts.push(alert)
  },

  removeAlert(state: AlertsState, alertId: string) {
    state.alerts = state.alerts.filter(alert => alert.id !== alertId)
  }
}
