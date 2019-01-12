<template>
  <div id="bootom-nav-bar">
    <el-row>
      <el-col :span="8" class="liang" :offset="9">
        <img
          src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png"
          width="48"
        >
        <span class="title">豆瓣</span>
      </el-col>
    </el-row>
    <el-row class="text-center">
      <el-col>
        <a
          href="https://www.douban.com/doubanapp/card/log?category=movie_home&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1"
          rel="nofollow"
        >去 App Store 免费下载 iOS 客户端</a>
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
.title {
  font-size: 24px;
}
.liang {
  display: flex;
  align-items: center;
}
#bootom-nav-bar {
  margin-top: 50px;
}
.text-center {
  font-size: 14px;
  text-align: center;
  color: #42bd56;
  margin: 10px 0 50px 0;
}
.text-center a {
  color: #42bd56;
}
img {
  margin: 0 10px 0 0;
}
</style>
