<script>
import { useCallStore } from '../stores/call';

export default {
    name: 'JournalView',
  setup() {
    const callStore = useCallStore();

    const CallBack = (index) => {
      callStore.CallBack(index);
    };

    return { callStore, CallBack };
  }
}
</script>

<template>
  <div class="journal">
    <div class="contact-precis" v-for="(call, index) in callStore.callLog" :key="index">
      <div>{{ call.number }}</div>
      <div>{{ call.time }}</div>
      <button @click="CallBack(index)"><img src="../assets/telephone.png" alt=""></button>
    </div>
  </div>
</template>

<style scoped>

.journal {
  padding: 10% 5% 5% 5%;
}

button img {
  align-items: center;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}

button {
  background-color: transparent;
  border: none;
}

.contact-precis {
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: solid 1px black;

}
</style>