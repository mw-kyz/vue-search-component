<template>
  <!-- <div class="search-component" v-menu-hide="setMenuHide"> -->
  <div class="search-component">
    <div class="search-input">
      <my-input
        type="number"
        placeholder="请输入分数"
        :value="searchedScore"
        @input.native="setScore"
      ></my-input>
      <my-button-group
        :regulars="regulars"
        :current="currentRegular"
        @click="setCurrentRegular"
      ></my-button-group>
      <my-menu
        :show="menuShow"
        :data="menuList"
        :checked-data="checkedList"
        @click="setChecked"
      ></my-menu>
    </div>
  </div>
</template>

<script>
import MyInput from './MyInput.vue'
import MyButtonGroup from './MyButtonGroup.vue'
import MyMenu from './MyMenu.vue'
import menuHide from '../directives/menuHide'

export default {
  name: 'Search',
  components: {
    MyInput,
    MyButtonGroup,
    MyMenu
  },
  directives: {
    menuHide
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      searchedScore: 0,
      currentRegular: 'up',
      menuList: [],
      checkedList: [],
      menuShow: false,
      regulars: [
        {
          regular: 'up',
          text: '以上',
          type: 'primary'
        },
        {
          regular: 'down',
          text: '以下',
          type: 'primary'
        }
      ]
    }
  },
  methods: {
    setScore (e) {
      const _value = e.target.value
      
      if (_value.length > 0) {
        this.searchedScore = Number(_value)
        this.filterStudents()
      }
    },
    setCurrentRegular (regular) {
      this.currentRegular = regular
      this.filterStudents()
    },
    filterStudents () {
      switch (this.currentRegular) {
        case 'up':
          this.menuList = this.data.filter(item => {
            return item.score >= this.searchedScore
          })
          break
        case 'down':
           this.menuList = this.data.filter(item => {
            return item.score <= this.searchedScore
          })
          break
        default:
          break
      }
      this.menuShow = this.menuList.length > 0
    },
    getChecked (id) {
      return this.checkedList.some(item => item.id === id)
    },
    setChecked (info) {
      const hasThisItem = this.getChecked(info.id)

      if (hasThisItem) {
        this.checkedList = this.checkedList.filter(item => {
          return item.id != info.id
        })
      } else {
        this.checkedList.push(info)
      }
      this.$emit('setCheckedList', this.checkedList)
    },
    setMenuHide () {
      this.menuShow = false
    }
  }
}
</script>

<style lang="scss">
.search-component {
  width: 300px;
}
</style>