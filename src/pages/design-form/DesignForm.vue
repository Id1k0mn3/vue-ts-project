<template>
  <form class="design-form">
    <div class="design-form__head">
      
    </div>
  </form>
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

    data() {
      return {
        designItemFields: {
          id: 0,
          isPublished: false,
          designes: [],
          code: '',
          designName: '',
          designLink: '',
          designPreview: '',
        } as DesignItem
      }
    },

    mounted() {
      if (this.designItem?.id) {
        this.designItemFields = this.designItemFields;
      }
    }
  })
</script>
