<script>
import { ref } from 'vue';
import { useContactStore } from '../stores/contact';
import { useCallStore } from '../stores/call';

export default {
    name: 'contactView',
  setup() {
    const callStore = useCallStore();
    const contactStore = useContactStore();
    const makeCall = (number) => {
      callStore.makeCall(number);
    };
    return { contactStore, makeCall };
  },
};
</script>

<template>
    <div class="contacts">
      <RouterLink to="/addContact">
          <button class="button-add">+</button>
      </RouterLink>
      <div class="contact-precis" v-for="(contact, index) in contactStore.contacts" :key="index">
        <div>{{ contact.name }}</div>
        <div>{{ contact.number }}</div>
        <button @click="makeCall(contact.name)"><img src="../assets/telephone.png" alt=""></button>
      </div>
    </div>
  </template>

<style scoped>

.contacts {
  padding: 10% 5% 5% 5%;
}

.contact-precis {
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: solid 1px black;

}

.button-add {
    float: right;
    cursor: pointer;
    background-color: black;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 30px;
    margin-bottom: 20px;
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
</style>