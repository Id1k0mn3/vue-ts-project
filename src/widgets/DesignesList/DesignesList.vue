<template>
  <ul class="designes-list">
    <li
      class="designes-list__item"
      v-for="designItem in designItems"
      :key="designItem.id"
      >
      <router-link :to="{name: 'add-change', params: {...designItem}}">
        <DesignItemWidget :designItem="designItem" v-if="designItem.isPublished"/>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import DesignDataService from "../../services/DesignDataServices";
  import { DesignItem } from '../../intefaces';
  import DesignItemWidget from "../../entities/design-item-widget/DesignItemWidget.vue"

  export default defineComponent({
    components: {
      DesignItemWidget,
    },

    data() {
      return {
        designItems: [] as DesignItem[],
      }
    },

    mounted() {
      DesignDataService.getAll()
        .then(({ data }: any) => {
          console.log(data);
          this.designItems = data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  })
</script>