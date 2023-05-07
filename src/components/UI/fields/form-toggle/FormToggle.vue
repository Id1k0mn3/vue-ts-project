<template>
  <div class="field-toggle">
    <input
      class="field-toggle__hidden-input"
      type="checkbox"
      :modelValue="isPublished"
      :checked="model"
      id="isPublishedField"
      @change="updateValue"

    >
    <span class="field-toggle__button"></span>
    <label class="field-toggle__label" for="isPublishedField">Неопублікований</label>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      model: Boolean,
    },
    emits: ['updateIsPublished'],

    data() {
      return {
        isPublished: this.model
      }
    },

    methods: {
      updateValue() {
        this.isPublished = !this.isPublished;
        this.$emit('updateIsPublished', this.isPublished);
      }
    }
  })
</script>