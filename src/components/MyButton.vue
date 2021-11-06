<template>
  <button
    :class="['my-btn', type, { active }]"
  >
    <slot></slot>
  </button>
</template>

<script>
/**
 * primary blue
 * success green
 * danger red
 * warning orange
 */
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'success',
          'danger',
          'warning'
        ].includes(value)
      }
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
   
  }
}
</script>

<style lang="scss">
.my-btn {
  &.primary {
    background-color: blue;
    color: #fff;
  }

  &.success {
    background-color: green;
    color: #fff;
  }

  &.danger {
    background-color: red;
    color: #fff;
  }

  &.warning {
    background-color: orange;
    color: #333;
  }

  &.active {
    background-color: #fff;
    color: #333;
  }
}
</style>