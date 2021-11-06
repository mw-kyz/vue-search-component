<template>
  <div id="app">
    <search
      ref="search"
      :data="students"
      @setCheckedList="setCheckedList"
    ></search>
    <div class="my-table">
      <table border="1" v-if="checkedList.length > 0">
        <thead>
          <tr>
            <th>操作</th>
            <th>姓名</th>
            <th>成绩</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item of checkedList"
            :key="item.id"
          >
            <td>
              <my-check-box
                :id="item.id"
                :checked="true"
                @click="setChecked(item)"
              ></my-check-box>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MyCheckBox from './components/MyCheckBox.vue'
import Search from './components/Search'
import students from './data/studentData'

export default {
  name: 'App',
  components: {
    Search,
    MyCheckBox
  },
  data() {
    return {
      students,
      checkedList: []
    }
  },
  methods: {
    setCheckedList (checkedStudents) {
      this.checkedList = checkedStudents
    },
    setChecked (info) {
      console.log(11)
      this.$refs.search.setChecked(info)
    }
  }
}
</script>

<style lang="scss">

</style>
