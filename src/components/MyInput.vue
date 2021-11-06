<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
  />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return [
          'text',
          'password',
          'number'
        ].includes(value)
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String | Number,
      default: ''
    }
  }
}
</script>

<style lang="scss">

</style>