<template>
  <div id="movie-template">
    <HeadNavBar></HeadNavBar>
    <MovieRecommendParent title_text="影院热映" :dataitems="data1" bool="true"></MovieRecommendParent>
    <MovieRecommendParent title_text="免费在线观影" :dataitems="data2" bool="true"></MovieRecommendParent>
    <MovieRecommendParent title_text="新片速递" :dataitems="data3" bool="true"></MovieRecommendParent>
    <MovieRecommendParent title_text="发现好电影"></MovieRecommendParent>
    <GoodMovie :datainfo="goodMovie"></GoodMovie>
    <MovieRecommendParent title_text="分类浏览"></MovieRecommendParent>
    <Class :datainfo="classinfo"></Class>
    <BootomNavBar></BootomNavBar>
  </div>
</template>

<script>
import HeadNavBar from "../general/HeadNavBar"
import MovieRecommendParent from "../general/MovieBookRecommendParent"
import GoodMovie from "../general/DiscoverGoodMoviesBook"
import Class from "../general/ClassificationOfBrowsing"
import BootomNavBar from '../general/BootomNavBar'
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    HeadNavBar,
    MovieRecommendParent,
    GoodMovie,
    Class,BootomNavBar
  },
  props: ["datainfo"],
  computed: {
    data1() {
      if (this.datainfo.movie == null) {
        return [];
      }
      return this.datainfo.movie.slice(0, 8);
    },
    data2() {
      if (this.datainfo.movie == null) {
        return [];
      }
      return this.datainfo.movie.slice(8, 16);
    },
    data3() {
      if (this.datainfo.movie == null) {
        return [];
      }
      return this.datainfo.movie.slice(16, 24);
    },
    goodMovie() {
      return this.datainfo.faxianhaodianying;
    },
    classinfo() {
      return [
        "经典",
        "冷门佳片",
        "豆瓣高分",
        "动作",
        "喜剧",
        "爱情",
        "悬疑",
        "恐怖",
        "科幻",
        "治愈",
        "文艺",
        "成长",
        "动画",
        "华语",
        "韩国",
        "日本"
      ];
    }
  }
};
</script>

<style scoped>
.ll {
  width: 100px;
}
</style>
