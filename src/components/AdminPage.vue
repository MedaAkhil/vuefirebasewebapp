<template>
  <div>
    <h2>Registered Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import { firestore } from '@/firebase'

export default {
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      firestore.collection('registrations').onSnapshot((snapshot) => {
        this.users = snapshot.docs.map((doc) => doc.data())
      })
    },
  },
}
</script>
