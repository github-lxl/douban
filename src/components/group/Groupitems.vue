<template>
  <div id="groupitems">
    <el-row>
      <el-col :span="22" :offset="1">
        <h2 class="title">{{title}}</h2>
      </el-col>
    </el-row>
    <div v-for="v in groupdatainfo" class="data-div">
      <el-row class="content">
        <el-col :span="3" :offset="1">
          <img :src="v.images.small" alt>
        </el-col>
        <el-col :span="15">
          <span class="items-content">{{v.title}}</span>
        </el-col>
        <el-col :span="5">
          <span class="items-numes">{{v.group_member}}人</span>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="1" :span="23">
          <p class="items-c">{{v.group_topic.title}}</p>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col>
        <p class="text-center">
          <router-link to="/" class="gengduo">更多相关小组</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["groupdatainfo","title"],
  methods: {}
};
</script>

<style scoped>
.text-center {
  text-align: center;
  border-bottom: 1px solid #f3f3f3;
  height: 40px;
  line-height: 40px;
}
.gengduo {
  color: #42bd56;
}
.title {
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 5px;
}
.img {
  background-color: red;
  height: 40px;
}
.content {
  display: flex;
  align-items: center;
}
.items-content {
  margin: 0 0 0 10px;
  font-size: 16px;
  display: inline-block;
  height: 24px;
  overflow: hidden;
}
.items-numes {
  font-size: 14px;
  color: #ccc;
}
.items-c {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #aaa;
}
.data-div {
  border-bottom: 1px solid #f3f3f3;
  padding: 10px 0 0 0;
}
</style>
