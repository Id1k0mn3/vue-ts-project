<template>
  <div class="app">
    <div class="app__layout flex h-screen">
      <div class="app__sidebar-wrapper"><Sidebar /></div>
      <div class="app__page-content grow bg-bg-color">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Sidebar from './components/layout/shared/Sidebar.vue'

  export default defineComponent({
    components: {
      Sidebar
    }
  })
</script>

<style scoped></style>
