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
        :class="className ? className : ''"
        @change="$emit('updateValue', {name: fieldName, value: fieldModel})"
      >
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
      className: String,
      minLength: Number,
      maxLength: Number,
      fieldName: String,
    },

    data() {
      return {
        fieldModel: this.model,
      }
    },

    created() {
      console.log(this.fieldModel);
    },
  })
</script>