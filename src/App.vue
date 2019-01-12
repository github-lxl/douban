<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    // 钩子函数
    this.$router.push("/home");
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* 去除圆角 */
.el-input__inner {
  border-radius: 0;
}

/* 缩放评分 */
.el-rate__icon,
.el-icon-star-on {
  font-size: 12px;
}

a {
  text-decoration: none;
}
</style>
