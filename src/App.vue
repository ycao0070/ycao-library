<script>
import BHeader from './components/BHeader.vue'
// import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue'

export default {
  name: "App",
  components: {
    BHeader
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI'
    }
  }
}
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
  <main class="main-box">
    <router-view></router-view>
  </main>
  </div>
</template>

<style scoped>
.main-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}
</style>
