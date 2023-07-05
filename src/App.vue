<template>
  <div>
    <h1>Firebase-Vue App</h1>
    <router-link to="/home">Home</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/gallery">Gallery</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
