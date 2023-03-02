<script lang="ts">
      import { defineComponent } from 'vue'

      export default defineComponent({
            props: {
                  name: {
                        type: String,
                        required: false,
                  },
                  className: {
                        type: String,
                        required: false,
                  },
                  id: {
                        type: String,
                        required: false,
                  },
                  value: {
                        type: String,
                        required: false,
                  },
                  required: {
                        type: Boolean,
                        required: false,
                        default: false,
                  },
                  checked: {
                        type: Boolean,
                        required: false,
                        default: false,
                  },
                  label: {
                        type: String,
                        required: true,
                  },
                  inverted: {
                        type: Boolean,
                        required: false,
                        default: false,
                  },
            }
      })
</script>

<template>
      <div class="custom-radio" :class="{ inverted: inverted }">
            <input
                  type="radio"
                  :name="name"
                  :class="className"
                  :id="id"
                  :checked="checked"
                  :value="value"
                  :required="required"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            />
            <label :for="id">{{ label }} </label>
      </div>
</template>

<style scoped></style>
