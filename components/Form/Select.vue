<template>
  <div class="relative">
    <label
      :for="label"
      class="block mb-2 text-sm font-medium text-gray-900 absolute hidden"
    >{{ label }}</label>
    <span v-if="!value" class="placeholder">{{ computedPlaceholder }}</span>
    <select
      :id="label"
      :value="value"
      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="`op-index-${index}`"
        :value="option.value"
        :selected="value === option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  computed: {
    computedPlaceholder (): string {
      return this.placeholder || this.label
    }
  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
}
</style>
