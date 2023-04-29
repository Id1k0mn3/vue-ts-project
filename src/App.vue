<template>
  <div class="app">
    <div class="app__layout">
      <div class="app__sidebar-wrapper"><Sidebar /></div>
      <div class="app__page-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Sidebar from './components/layout/shared/sidebar/Sidebar.vue'

  export default defineComponent({
    components: {
      Sidebar
    }
  })
</script>

<style scoped></style>
