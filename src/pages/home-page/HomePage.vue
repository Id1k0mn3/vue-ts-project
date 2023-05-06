<template>
  <div class="home-page">
    <div class="home-page__head">
      <h1 class="home-page__title">Всі дизайни</h1>
      <div class="home-page__action">
        <router-link :to="{name: 'design-form', params: { id: 0 }, query: {designItemData: JSON.stringify({})}}">
          <button 
          class="button button--default">
          Додати дизайн!</button>
        </router-link>
      </div>
    </div>
    <div class="home-page__content">
      <DesignesList />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import DesignesList from '../../widgets/DesignesList/DesignesList.vue';

  export default defineComponent({
    components: {
      DesignesList,
    }
  })
</script>