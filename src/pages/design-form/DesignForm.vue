<template>
  <form class="design-form" @submit.prevent="submitForm">
    <div class="design-form__head">
      <div class="design-form__head-toggle">
        <FieldToggle :model="designItemFields.isPublished" @update-is-published="setIsPublishedValue"/>
      </div>
      <div class="design-form__actions">
        <button v-if="designItemFields.id" class="button button--outline">Видалити</button>
        <button type="submit" class="button button--default">Зберегти і вийти</button>
      </div>
    </div>
    <ul class="design-form__images-list">
      <li class="desgin-form__images-list"
      v-if="designItemFields.designes"
      v-for="image in designItemFields.designes"
      :key="image.id"
      >
        {{ image }}
        <img :src="image.image" :alt="image.alt">
      </li>
      <li class="design-form__images-list-item">
        <div 
        class="design-form__file-upload-zone-wrapper"
        :class="designItemFields.designes && designItemFields.designes.length ? 'design-form__file-upload-zone-wrapper' : ''">
          <field-file-upload
            ref="upload"
            :model="designItemFields.designes"
            post-action="/post.method"
            put-action="/put.method"
          >
            <div class="design-form__file-upload-zone">

            </div>
          </field-file-upload>
        </div>
      </li> 
    </ul>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { DesignItem } from '../../intefaces';
  import FieldControl from '../../components/UI/fields/field-control/FieldControl.vue';
  import FieldToggle from '../../components/UI/fields/field-toggle/FieldToggle.vue';
  import VueUploadComponent from 'vue-upload-component/src/FileUpload.vue'

  export default defineComponent({
    components: {
      FieldControl,
      FieldToggle,
      FieldFileUpload: VueUploadComponent,
    },
    name: 'DesignItemWidget',

    props: {
      designItemData: {
        type: Object as () => DesignItem,
        required: true
      }
    },

    computed: {
      designItemFields() {
        return this.designItemData;
      }
    },

    created() {},

    methods: {
      submitForm() {
        console.log(this.designItemData);
      },

      setIsPublishedValue($data: boolean) {
        console.log($data);
      },
    }
  })
</script>
