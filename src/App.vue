<script setup>
import BHeader from './components/BHeader.vue'
// import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue'
</script>

<template>
  <div class="main-container">
    <header>
    <BHeader />
  </header>
  <main class="main-box">
    <router-view></router-view>
  </main>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}
</style>
