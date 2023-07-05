<template>
  <div>
    <h2>Event Registration</h2>
    <form @submit.prevent="register">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { firestore } from '@/firebase'

export default {
  data() {
    return {
      name: '',
      email: '',
    }
  },
  methods: {
    register() {
      firestore.collection('registrations').add({
        name: this.name,
        email: this.email,
      })
      this.name = ''
      this.email = ''
    },
  },
}
</script>




















