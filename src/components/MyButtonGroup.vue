<template>
  <div class="my-button-group">
    <my-button
      v-for="item of regulars"
      :key="item.regular"
      :type="item.type"
      :active="current === item.regular"
      @click.native="setCurrent(item.regular)"
    >{{ item.text }}</my-button>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
  name: 'MyButtonGroup',
  components: {
    MyButton
  },
  props: {
    regulars: {
      type: Array,
      default () {
        return []
      }
    },
    current: {
      type: String,
      default: ''
    }
  },
  methods: {
    setCurrent (regular) {
      this.$emit('click', regular)
    }
  }
}
</script>

<style lang="scss">
.my-button-group {
  display: inline-block;
}
</style>