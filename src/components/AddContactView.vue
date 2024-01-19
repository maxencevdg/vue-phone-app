<script>
import { ref } from 'vue';
import { useContactStore } from '../stores/contact';
import { useRouter } from 'vue-router';

export default {
    name: 'addContactView',
  setup() {
    const contactStore = useContactStore();
    const router = useRouter();
    const newContact = ref({ name: '', number: '' });
    const addContact = () => {
      contactStore.addContact({ ...newContact.value });
      newContact.value = { name: '', number: '' };
      router.push('/contact');
    };
    return { addContact, newContact };
  },
};
</script>

<template>
  <form @submit.prevent="addContact">
    <input v-model="newContact.name" placeholder="Nom" required />
    <input v-model="newContact.number" placeholder="Numéro" required />
    <button type="submit">Ajouter</button>
  </form>
</template>

<style scoped>
form {
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
}

</style>