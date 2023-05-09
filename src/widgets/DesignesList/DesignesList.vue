<template>
  <ul class="designes-list">
    <li
      class="designes-list__item"
      v-for="designItem in designItems"
      :key="designItem.id"
      >
      <router-link :to="{ name: 'design-form', params: { id: designItem.id }, query: { designItemData: JSON.stringify(designItem) } }">
        <DesignItemWidget :designItem="designItem" v-if="designItem.isPublished"/>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import DesignItemWidget from "../../entities/design-item-widget/DesignItemWidget.vue"

  export default defineComponent({
    components: {
      DesignItemWidget,
    },

    computed: {
      designItems() {
        const store = useStore();
        return store.state.designes.designes;
      },
    },

    created() {
      const store = useStore();
      if (localStorage.getItem('itemsWereDeleted') || this.designItems.length) return;
      store.dispatch('designes/getDesignes')
    },
  })
</script>