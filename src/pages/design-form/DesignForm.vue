<template>
  <form class="design-form" @submit.prevent="submitForm">
    <div class="design-form__head">
      <div class="design-form__head-toggle">
        <form-toggle :model="designItemFields.isPublished" @update-is-published="setIsPublishedValue"/>
      </div>
      <div class="design-form__actions">
        <button v-if="designItemFields.id" class="button button--outline" @click="removeDesign">Видалити</button>
        <button type="submit" class="button button--default" :class="{'button--disabled': !files.length || !designItemFields.designName || !designItemFields.designLink || !designItemFields.code}">Зберегти і вийти</button>
      </div>
    </div>
    <div class="design-form__images-list">
      <draggable 
        v-model="files" 
        group="people" 
        @start="drag=true" 
        @end="onChangeOrder"
        v-show="files && files.length" 
        item-key="id">
        <template #item="{element}">
          <div class="design-form__images-list-item"
            v-if="files && files.length"
            :key="element.id"
            >
              <button 
                v-if="files.length > 1"
                class="design-form__button-remove-design"
                @click="removeDesignItem(element.id)">
                <img src="../../assets/images/image-basket.png" alt="basket">
              </button>
              <img class="design-form__image" :src="element.image" :alt="element.alt">
            </div>
        </template>
      </draggable>
      <form-file-upload :files="files" @add-new-file="addNewFile"></form-file-upload>
    </div>
    <div class="design-form__fields">
      <div class="design-form__fields-group">
        <form-control 
          :type="'number'"
          :model="designItemFields.code || ''"
          :controlClassName="'form-control--number'"
          :fieldName="'code'"
          @update-value="setFieldValue"
        />
        <form-control 
          :type="'text'"
          :model="designItemFields.designName || ''"
          :minLength="3"
          :maxLength="24"
          :fieldName="'designName'"
          @update-value="setFieldValue"
        />
      </div>
      <form-control
        :type="'text'"
        :model="designItemFields.designLink || ''"
        :minLength="8"
        :maxLength="100"
        :fieldName="'designLink'"
        @update-value="setFieldValue"
      />
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { DesignItem } from '../../intefaces';
  import { DesignImage } from '../../intefaces';
  import { useStore } from 'vuex';
  import FormControl from '../../components/UI/fields/form-control/FormControl.vue';
  import FormToggle from '../../components/UI/fields/form-toggle/FormToggle.vue';
  import FormFileUpload from '../../components/UI/fields/form-file-upload/FormFileUpload.vue';
  import draggable from 'vuedraggable';

  export default defineComponent({
    components: {
      FormControl,
      FormToggle,
      FormFileUpload,
      draggable,
    },
    name: 'DesignItemWidget',

    props: {
      designItemData: {
        type: Object as () => DesignItem,
        required: true,
      },
    },

    data() {
      return {
        drag: false,
        files: [] as DesignImage[],
        areThereEmptyFields: false,
        designItemFields: this.designItemData,
      }
    },

    created() {
      if (!this.designItemFields.designes) {
        this.files = [];
        return;
      }

      this.files = this.designItemFields.designes;
    },

    methods: {
      getDesignes() {
        const store = useStore();

        if (store.state.designes.designes.length) {
          return;
        }

        store.dispatch('designes/getDesignes');
      },

      submitForm() {
        if (!this.designItemFields.id) {
          this.designItemFields.id = Math.random();
        }

        this.designItemFields.designes = this.files;
        this.$store.dispatch('designes/updateDesign', this.designItemFields);
        this.$router.push('/');
      },

      setIsPublishedValue($data: boolean) {
        this.designItemFields.isPublished = $data;
      },

      addNewFile(newFile: any) {
        if (!newFile) {
          return;
        }

        if (!this.designItemFields.designPreview) {
          this.designItemFields.designPreview = newFile.image;
        }
      },

      onChangeOrder() {
        this.designItemFields.designes = this.files;
        this.designItemFields.designPreview = this.files[0].image;
      },

      removeDesignItem(id: number) {
        this.files = this.files.filter((item) => item.id !== id);
      },

      setFieldValue({name, value}) {
        this.designItemFields[name] = value;
      },

      removeDesign() {
        this.$store.dispatch('designes/removeDesign', this.designItemFields.id);

        if (!this.$store.state.designes.designes.length) {
          localStorage.setItem('itemsWereDeleted', 'true');
        }

        this.$router.push('/');
      },
    }
  })
</script>
