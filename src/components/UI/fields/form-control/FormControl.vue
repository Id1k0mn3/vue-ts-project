<template>
  <div 
    class="form-control"
    :class="controlClassName ? controlClassName : ''"
  >
    <div class="form-control__inner">
      <input 
        class="form-control__field"
        v-model="fieldModel"
        :type="type"
        :required="required ? required : false"
        :minLength="minLength ? minLength : false"
        :maxLength="maxLength ? maxLength : false"
        :class="{ 'form-control__field--error': !fieldModel && isChanged }"
        @change="onChange"
        @input="onInput"
      >
    </div>
    <div class="form-control__error-wrapper" v-if="!fieldModel && isChanged">
      <span class="form-control__error">Field is required</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';

  type FieldModel = {
    type: string | number | boolean;
  }

  export default defineComponent({
    name: 'FormControl',
    props: {
      type: String,
      required: Boolean,
      model: {
        type: [String, Number, Boolean] as PropType<FieldModel['type']>,
        required: true,
      },
      controlClassName: String,
      minLength: Number,
      maxLength: Number,
      fieldName: String,
    },

    data() {
      return {
        fieldModel: this.model,
        isChanged: false,
      }
    },

    methods: {
      onChange() {
        if (!this.fieldModel) {
          return;
        }

        this.$emit('updateValue', {name: this.fieldName, value: this.fieldModel});
      },

      onInput() {
        this.isChanged = true;
      },
    },
  })
</script>