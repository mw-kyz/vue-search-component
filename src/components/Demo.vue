<template>
  <div class="search-component">
    <input
      type="number"
      placeholder="请输入分数"
      :value="searchedScore"
      @input="setScore"
    />
    <button
      :class="['regular-btn', { active: fillterRegular === 'up' }]"
      @click="setFillterRegular('up')"
    >以上</button>
    <button
      :class="['regular-btn', { active: fillterRegular === 'down' }]"
      @click="setFillterRegular('down')"
    >以下</button>
    <div class="menu" v-show="menuShow">
      <ul>
        <li
          v-for="item of menuList"
          :key="item.id"
        >
          <input
            type="checkbox"
            :checked="getChecked(item.id)"
            @click="setChecked(item)"
          />
          <span>姓名：{{ item.name }}</span>
          <span>   成绩：{{ item.score }}</span>
        </li>
      </ul>
    </div>
    <div class="checked-list" v-show="checkedList.length > 0">
      <p>已选择</p>
      <ul>
        <li
          v-for="item of checkedList"
          :key="item.id"
        >
          <input
            type="checkbox"
            :checked="true"
            @click="setChecked(item)"
          />
          <span>姓名：{{ item.name }}</span>
          <span>   成绩：{{ item.score }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import students from '../data/studentData'

export default {
  name: 'Demo',
  data() {
    return {
      searchedScore: 0,
      fillterRegular: 'up',
      menuShow: false,
      menuList: [],
      checkedList: []
    }
  },
  methods: {
    setScore (e) {
      this.searchedScore = Number(e.target.value)
      this.filterStudents()
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
    },
    setFillterRegular (regular) {
      this.fillterRegular = regular
      this.filterStudents()
    },
    filterStudents () {
      switch (this.fillterRegular) {
        case 'up':
          this.menuList = students.filter(item => {
            return item.score >= this.searchedScore
          })
          break
        case 'down':
           this.menuList = students.filter(item => {
            return item.score <= this.searchedScore
          })
          break
        default:
          break
      }
      this.menuShow = this.menuList.length > 0
    }
  }
}
</script>

<style lang="scss">
.active {
  background-color: #424242;
  color: #fff;
}
</style>