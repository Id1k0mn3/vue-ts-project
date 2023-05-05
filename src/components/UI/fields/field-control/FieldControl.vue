<template>
  <div class="field-control">
    <div class="field-control__inner">
      <input class="field-control__field" :type="type">
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'FieldControl',
    props: {
      type: String,
    },
  })
</script>