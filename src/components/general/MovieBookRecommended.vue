<template>
  <div id="movie-child">
    <el-row>
      <el-col class="l-flex">
        <div class="item" v-for="(v,i) in datainfo">
          <el-row class="img">
            <img :src="v.images.medium" alt>
          </el-row>
          <el-row>
            <p class="title">{{v.title}}</p>
          </el-row>
          <el-row class="ll">
            <div v-if="average[i]!=0">
              <el-rate
                v-model="average[i]"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </div>
            <div v-if="average[i]==0" class="no-pf">暂无评分</div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      average: []
    };
  },
  methods: {},
  props: ["datainfo"],
  beforeUpdate() {
    if (this.datainfo != null) {
      for (var i = 0; i < this.datainfo.length; i++) {
        this.average.push(Number(this.datainfo[i].rating.average));
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 100px;
  height: 142px;
  margin: 20px 10px 0 0;
}
.title {
  text-align: center;
  font-size: 15px;
  width: 100%;
  height: 20px;
  overflow: hidden;
}
.l-flex {
  display: flex;
}
.ll {
  padding: 10px;
}
i {
  font-size: 12px;
}
.no-pf {
  font-size: 14px;
  text-align: center;
}
</style>
