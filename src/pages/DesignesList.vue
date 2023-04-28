<template>
  <div>
    <div v-for="item in designItems" :key="item.id">
      {{ item.code }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import DesignDataService from "../services/DesignDataServices";
  import { DesignItem } from '../intefaces';

  export default defineComponent({
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