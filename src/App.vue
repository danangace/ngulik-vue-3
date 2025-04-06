<script setup>
import { ref } from 'vue';

const person = ref({
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY'
  }
})

const listOfBook = ref([
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
  { id: 3, title: 'Book 3' }
])

function changeBookTitle () {
  listOfBook.value[0].title = listOfBook.value[0].title === 'Book 1' ? 'Book 1 Updated' : 'Book 1'
}

function changeAddressCity () {
  person.value.address.city = person.value.address.city === 'New York' ? 'Los Angeles' : 'New York'
}
</script>

<template>
  <div>
    <h1>Coba ganti nested object</h1>
    <p>Ini Nama Orang {{ person.name }}</p>
    <p>Umurnya: {{ person.age }} tahun</p>
    <p>Alamatnya ada di: Kota {{ person.address.city }}</p>
    <p>Provinsi: {{ person.address.state }}</p>
    <button @click="changeAddressCity">Ganti Alamat</button>
    {{ JSON.stringify(person) }}

    <h1>Coba ganti nested array</h1>
    <div v-for="book in listOfBook" :key="book.id" style="display: flex;">
      <span>{{ book.id }}. </span>
      <p>{{ book.title }}</p>
    </div>

    <button @click="changeBookTitle">Ganti Judul Buku</button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
