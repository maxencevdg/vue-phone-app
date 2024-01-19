<script>
import { ref, computed } from 'vue';
import { useCallStore } from '../stores/call';
import { useContactStore } from '../stores/contact';

export default {
    name: 'ClavierView',
  setup() {
    const callStore = useCallStore();
    const contactStore = useContactStore();
    const input = ref('');

    const addNumber = (number) => {
      input.value += number;
    };

    const clear = () => {
      input.value = '';
    };

    const makeCall = () => {
      callStore.makeCall(input.value);
      clear();
    };

    const contactName = computed(() => {
      const contact = contactStore.contacts.find(c => c.number === input.value);
      return contact ? contact.name : '';
    });

    return { callStore, input, addNumber, clear, makeCall, contactName };
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"],
    }
  }
}
</script>

<template>
    <div class="clavier">
      <div class="display">{{ input }}</div>
      <div class="contact-name">{{ contactName }}</div>
      <div class="keypad">
        <button class="number" v-for="number in numbers" :key="number" @click="addNumber(number)">
          {{ number }}
        </button>
        <button class="call" @click="makeCall"><img src="../assets/telephone.png" alt=""></button>
      </div>
    </div>
  </template>


<style scoped>

.clavier {
    padding: 10% 5% 5% 5%;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
}

.number {
    cursor: pointer;
    background-color: black;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 30px;
}
.keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.call {
    grid-column: 2 / span 1;
    background-color: transparent;
    border: none;
}

.call img {
    align-items: center;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
}

.display {
  margin-bottom: 20px;
  font-size: 2em;
  min-height: 2em;
}

.contact-name {
    min-height: 2em;
}

.contact-name {
  margin-bottom: 20px;
  font-size: 1.5em;
}
</style>