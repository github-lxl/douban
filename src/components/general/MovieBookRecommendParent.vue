<template>
  <div class="movie-parent">
    <el-row>
      <el-col :span="15" :offset="1" class="title">{{title_text}}</el-col>
      <el-col :span="2" :offset="5" class="it" v-if="bool">
        <a href>更多</a>
      </el-col>
    </el-row>
    <el-row class="l-movie" v-if="dataitems!=null">
      <el-col :span="22" :offset="1">
        <div class="l-movie-info">
          <Child :datainfo="dataitems"></Child>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Child from "../general/MovieBookRecommended";
export default {
  data() {
    return {};
  },
  props: ["title_text", "dataitems", "bool"],
  methods: {},
  components: {
    Child
  }
};
</script>

<style scoped>
.movie-parent {
  margin: 10px 0 0 0;
}
.it {
  color: green;
  font-size: 14px;
  text-align: right;
}
.title {
  font-size: 16px;
}

.l-movie {
  overflow: auto;
  width: 100%;
}
.l-movie-info {
  display: flex;
  background-color: white;
  height: 255px;
  width: 850px;
}
</style>
