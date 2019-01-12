<template>
  <div class="home-text">
    <a href="s" class="l-parent" v-for="v in datainfo">
      <el-row>
        <el-col :span="16" :offset="1" class="l-info">
          <h3>{{v.title}}</h3>
          <p v-html="v.content" class="l-p"></p>
        </el-col>
        <el-col :span="6" class="l-img" :offset="1">
          <div class="l-div">
            <img :src="v.image" alt>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" class="zuozhe" :offset="1">by {{v.owner.name}}</el-col>
      </el-row>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["datainfo"],
  methods: {}
};
</script>

<style scoped>
h3 {
  width: 250px;
}
.l-div {
  width: 85px;
}
.l-parent {
  padding: 15px 0;
  border-bottom: 1px solid #f3f3f3;
}
.l-parent {
  display: inline-block;
}
.l-info {
  height: 110px;
  overflow: hidden;
}
img {
  width: 85px;
  height: 90px;
}
.l-p {
  width: 234px;
  overflow: hidden;
}

h3 {
  font-weight: 500;
  font-size: 16px;
  color: black;
}
p {
  font-size: 12px;
  color: #aaa;
  letter-spacing: 2px;
  overflow: hidden;
  height: 46px;
}
.zuozhe {
  margin-top: 5px;
  font-size: 12px;
  color: #aaa;
}
</style>
