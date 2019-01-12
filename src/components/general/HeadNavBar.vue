<template>
  <div class="head-nav">
    <div class="head-bar">
      <el-row class="l-row" id="nav">
        <el-col :span="22" :offset="1">
          <el-row class="l-row">
            <el-col :span="4" class="title">
              <span @click="shouye">豆瓣</span>
            </el-col>
            <el-col :span="16" :offset="5">
              <ul class="l-ul" v-if="datainfo==null">
                <li>
                  <router-link to="/movie" class="title1">电影</router-link>
                </li>
                <li>
                  <router-link to="/book" class="title2">图书</router-link>
                </li>
                <li>
                  <router-link to="/radio" class="title3">广播</router-link>
                </li>
                <li>
                  <router-link to="/group" class="title4">小组</router-link>
                </li>
                <li>
                  <a href class="title5">
                    <i class="el-icon-menu"></i>
                  </a>
                </li>
              </ul>
              <ul class="l-ul" v-else>
                <li v-for="v in datainfo">
                  <router-link :to="v.href" class="datainfo">{{v.title}}</router-link>
                </li>
                <li>
                  <a href class="title5">
                    <i class="el-icon-menu"></i>
                  </a>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    shouye() {
      this.$router.push("/home");
    }
  },
  props: ["datainfo"]
};
</script>

<style scoped>
a {
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-left: 12px;
}

.head-nav {
  height: 47px;
  border-bottom: 1px solid #f3f3f3;
}
.head-bar {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  background-color: white;
}
.title {
  font-size: 24px;
  font-weight: 900;
  color: green;
}
.l-row {
  height: 45px;
  display: flex;
  align-items: center;
}
.l-ul li {
  display: inline-block;
}
.title1 {
  color: #2384e8;
}
.title2 {
  color: #9f7860;
}
.title3 {
  color: #e4a813;
}
.title4 {
  color: #2ab8cc;
}
.title5 {
  font-size: 20px;
}
.clear {
  clear: both;
}
.datainfo {
  font-size: 15px;
  font-weight: 500;
  color: rgb(66, 189, 86);
}
</style>
