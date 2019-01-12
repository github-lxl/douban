<template>
  <div id="class-info">
    <el-row>
      <el-col :span="23" :offset="1">
        <el-row class="class-m">
          <div v-for="v in datainfo">
            <el-col :span="12">
              <router-link to="/movie" class="class-a">
                <span class="class-span">{{v}}</span>
                <i class="el-icon-arrow-right icon"></i>
              </router-link>
            </el-col>
          </div>
        </el-row>
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
.class-m {
  margin: 10px 0 10px 0;
}
.class-a {
  width: 100%;
  display: inline-block;
  height: 40px;
  font-size: 14px;
  color: #42bd56;
  line-height: 40px;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
}
.icon {
  color: #eee;
}
.class-span{
    display: inline-block;
    width: 80%;
    margin: 0 0 0 10px;
}
</style>
