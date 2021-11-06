<template>
  <div class="my-menu" v-show="show">
    <my-check-box
      v-for="item of data"
      :key="item.id"
      :id="item.id"
      :checked="computedChecked(item.id)"
      @click="setChecked(item.id)"
    >
      <span>姓名：{{ item.name }}</span>
      <span>成绩：{{ item.score }}</span>
    </my-check-box>
  </div>
</template>

<script>
import MyCheckBox from './MyCheckBox.vue'

export default {
  name: 'MyMenu',
  components: {
    MyCheckBox
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    checkedData: {
      type: Array,
      default() {
        return []
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setChecked (id) {
      this.$emit('click', this.data.find(item => item.id === id))
    },
    computedChecked (id) {
      return this.checkedData.some(item => item.id === id)
    }
  }
}
</script>

<style lang="scss">
.my-menu {
  width: 288px;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #000;
}
</style>