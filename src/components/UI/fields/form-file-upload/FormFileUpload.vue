<template>
  <div 
    class="field-file-upload"
    :class="files && !files.length ? 'field-file-upload--is-empty' : ''">

    <div 
    class="field-file-upload__file-upload-zone-wrapper">
      <field-file-upload
        ref="upload"
        @input-file="inputFile"
      >
        <div 
        class="field-file-upload__file-upload-zone"
        :class="files && !files.length ? 'field-file-upload__file-upload-zone--is-empty' : ''">
        <img class="field-file-upload__file-uopload-image" src="../../../../assets/images/file-upload-image.png" alt="" v-if="files &&!files.length">
      </div>
      </field-file-upload>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import VueUploadComponent from 'vue-upload-component/src/FileUpload.vue';
  import { DesignImage } from '../../../../intefaces';
  export default defineComponent({
    components: {
      FieldFileUpload: VueUploadComponent,
    },

    props: {
      files: {
        type: Array as () => DesignImage[],
        required: true,
      }
    },

    methods: {
      inputFile(newFile: any) {
        if (!newFile) return;

        const newImage: DesignImage = {
          image: URL.createObjectURL(newFile.file),
          alt: newFile.name,
          id: Math.random(),
        };

        this.files.push(newImage);
        this.$emit('addNewFile', newImage);
      },
    }
  })
</script>