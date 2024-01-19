import { defineStore } from "pinia";

export const useCallStore = defineStore({
  id: "call",
  state: () => ({
    callLog: [
        {number: "0112347688", time: "16/01/2023 12:00"},
        {number: "0613840927", time: "15/01/2023 12:17"},
        {number: "0726184629", time: "14/01/2023 20:52"},
        {number: "Maxence", time: "12/01/2023 14:16"},
        {number: "Maxence", time: "12/01/2023 13:15"},
        {number: "0765342992", time: "10/01/2023 10:10"},
        {number: "0142040842", time: "09/01/2023 09:09"},

    ]
  }),
  actions: {
    makeCall(number) {
        const now = new Date().toLocaleDateString('fr-FR', { hour: '2-digit', minute: '2-digit'});
        this.callLog.unshift({ number, time: now });
    },
    CallBack(index) {
        const call = this.callLog[index];
        const now = new Date().toLocaleDateString('fr-FR', { hour: '2-digit', minute: '2-digit'});
        this.callLog.unshift({ ...call, time: now });
    }
  }
});