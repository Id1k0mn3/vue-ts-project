<template>
  <div class="design-item-widget">
    <div class="design-item-widget__wrapper-image">
      <img :src="designItem?.designPreview" alt="" class="design-item-widget__image">
    </div>
    <div class="design-item-widget__short-information">
      <div class="design-item-widget__label">
        <span class="design-item-widget__label-text">{{ designItem?.code }}</span>
      </div>
      <p class="design-item-widget__name">{{ designItem?.designName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { DesignItem } from '../../intefaces';
  import type { PropType } from 'vue';

  export default defineComponent({
    name: 'DesignItemWidget',
    props: {
      designItem: Object as PropType<DesignItem>
    },

    mounted() {
      console.log(this.designItem)
    }
  })
</script>