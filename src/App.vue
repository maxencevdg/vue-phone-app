<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'App'
}
</script>

<template>
  <main>
    <nav>
      <RouterLink to="/"><img src="./assets/recents.png" alt=""></RouterLink>
      <RouterLink to="/contact"><img src="./assets/contacts.png" alt=""></RouterLink>
      <RouterLink to="/clavier"><img src="./assets/clavier.png" alt=""></RouterLink>
    </nav>
    <RouterView />
  </main>

</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

img {
  width: 30px;
  height: 30px;
}

main {
  color: black;
  margin: auto;
  background-color: aliceblue;
  border-radius: 15px;
  width: 400px;
  height: 700px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
