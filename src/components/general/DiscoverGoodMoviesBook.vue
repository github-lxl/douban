<template>
  <div id="good-movie">
    <el-row>
      <el-col :offset="1" :span="22" class="l-col">
        <div :class="{good:true}">
          <a
            :href="v.href"
            v-for="v in datainfo"
            class="good-movie"
            v-if="v.title!=null"
          >{{v.title}}</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["datainfo"]
};
</script>

<style scoped>
.good-movie {
  display: inline-block;
  height: 45px;
  font-size: 14px;
  line-height: 45px;
  border-radius: 4px;
  padding: 0 15px 0 15px;
  margin: 10px 5px 0 0;
}
.l-col {
  overflow: auto;
}
.width900 {
  margin: 10px 0 20px 0;
}
.good{
   width: 900px;
}
.width700 {
  margin: 10px 0 20px 0;
  width: 600px;
}
.good a:first-child,
.good a:nth-child(5) {
  border: 1px solid #42bd56;
  color: #42bd56;
}
.good a:nth-child(2) {
  border: 1px solid #2384e8;
  color: #2384e8;
}
.good a:nth-child(3),
.good a:nth-child(4) {
  border: 1px solid #ffac2d;
  color: #ffac2d;
}
.good a:nth-child(6) {
  border: 1px solid #cc3344;
  color: #cc3344;
}
.good a:nth-child(7) {
  border: 1px solid #ff4055;
  color: #ff4055;
}

.good a:nth-child(8) {
  border: 1px solid #4f9ded;
  color: #4f9ded;
}
</style>
