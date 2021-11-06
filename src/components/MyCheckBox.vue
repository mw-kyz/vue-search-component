<template>
  <div class="my-check-box">
    <label :for="id" class="my-check-box-lbl">
      <input type="checkbox" :id="id" @click="doCheck" v-bind="$attrs"/>
      <span class="icon"></span>
    </label>
    <span class="text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyCheckBox",
  inheritAttrs: false,
  props: {
    id: {
      type: String | String,
      default: ''
    }
  },
  methods: {
    doCheck () {
      this.$emit('click', this.id)
    }
  }
}
</script>

<style lang="scss">
.my-check-box {
  .my-check-box-lbl {
    display: inline-block;
    position: relative;
    width: 12px;
    height: 12px;
    border: 1px solid #333;
    border-radius: 50%;
    margin-right: 5px;
    margin-top: 5px;;
    vertical-align: -5px;

    input {
      visibility: hidden;

      &:checked + .icon {
        display: block;
      }
    }

    .icon {
      display: none;
      position: absolute;
      top: 3px;
      left: 3px;
      width: 6px;
      height: 6px;
      background-color: blue;
      border-radius: 50%;
    }
  }
}
</style>