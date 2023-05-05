<template>
  <form class="design-form" @submit.prevent="submitForm">
    <div class="design-form__head">
      <!-- <div class="design-form__head-toggle">
        <FieldToggle :model="designItemFields.isPublished" @update-is-published="setIsPublishedValue"/>
      </div>
      {{ $route.query }}
      <div class="design-form__action">
        <button v-if="designItemFields.id">Видалити</button>
        <button type="submit">Зберегти і вийти</button>
      </div> -->
    </div>
  </form>
</template>

<script lang="ts">
  // import { useRoute } from 'vue-router'
  import { defineComponent } from 'vue';
  import { DesignItem } from '../../intefaces';
  // import type { PropType } from 'vue';
  import FieldControl from '../../components/UI/fields/field-control/FieldControl.vue';
  import FieldToggle from '../../components/UI/fields/field-toggle/FieldToggle.vue';
  import { DesignImage } from '../../intefaces';

  export default defineComponent({
    components: {
      FieldControl,
      FieldToggle,
    },
    name: 'DesignItemWidget',

    props: {
      designItemData: { type: Object, required: true } as unknown as {
        userData: DesignItem;
      }
    },

    computed: {
      designItemFields() {
        return this.designItemData;
      }
    },

    created() {
      console.log(this.$props);
      // console.log(`Fetching data for user ${this.designItemData.id}...`);
      // здесь можно использовать this.userData.id для загрузки данных пользователя
    },

    // data() {
    //   return {
    //     designItemFields: {
    //       id: 0,
    //       isPublished: false,
    //       designes: [] as Array<DesignImage>,
    //       code: '',
    //       designName: '',
    //       designLink: '',
    //       designPreview: '',
    //     } as DesignItem
    //   };
    // },

    // mounted() {
    //   console.log((this.$route.query.designItem))
      
    //   if (this.designItem?.id) {
    //     this.designItemFields = this.designItemFields;
    //   }
    // },

    // methods: {
    //   submitForm() {
    //     console.log(this.designItemData);
    //   },

    //   setIsPublishedValue($data) {
    //     console.log($data);
    //   },
    // }
  })
</script>
