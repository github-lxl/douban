<template>
  <div class="home-nav-bar">
    <el-row class="l-row">
      <el-col :span="11" :offset="1" class="l-col">
        <router-link to="/movie" class="title1">影院热映</router-link>
      </el-col>
      <el-col :span="10">
        <router-link to="/movie" class="title1">变瘦变美变漂亮</router-link>
      </el-col>
    </el-row>
    <el-row class="l-row">
      <el-col :span="11" :offset="1" class="l-col">
        <router-link to="/movie" class="title1">豆瓣时间</router-link>
      </el-col>
      <el-col :span="10">
        <router-link to="/movie" class="title1">使用豆瓣App</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.title1 {
  display: inline-block;
  background-color: #f6f6f6;
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: black;
  font-weight: 500;
  font-size: 14px;
}
.l-row {
  margin: 6px 0;
}
.home-nav-bar {
  margin: 30px 0 0 0;
}
.l-col {
  margin-right: 6px;
}
</style>
