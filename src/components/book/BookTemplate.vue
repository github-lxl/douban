<template>
  <div class="book">
    <HeadNavBar></HeadNavBar>
    <Parent title_text="最受关注图书|虚构类" :dataitems="data1"></Parent>
    <Parent title_text="最受关注图书|非虚构类" :dataitems="data2"></Parent>
    <Parent title_text="豆瓣书店" :dataitems="data2"></Parent>
    <Parent title_text="发现好图书"></Parent>
    <GoodBook :datainfo="goodBook"></GoodBook>
    <Parent title_text="分类浏览"></Parent>
    <Class :datainfo="classinfo"></Class>
    <BootomNavBar></BootomNavBar>
  </div>
</template>

<script>
import HeadNavBar from "../general/HeadNavBar"
import Child from "../general/MovieBookRecommended"
import Parent from "../general/MovieBookRecommendParent"
import GoodBook from "../general/DiscoverGoodMoviesBook"
import Class from "../general/ClassificationOfBrowsing"
import BootomNavBar from '../general/BootomNavBar'
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    HeadNavBar,
    Child,
    Parent,
    GoodBook,
    Class,BootomNavBar
  },
  props: ["datainfo"],
  computed: {
    data1() {
      if (this.datainfo.books == null) {
        return [];
      }
      console.log(this.datainfo);
      return this.datainfo.books.slice(0, 8);
    },
    data2() {
      if (this.datainfo.books == null) {
        return [];
      }
      return this.datainfo.books.slice(8, 16);
    },
    goodBook() {
      // goodBook
      if (this.datainfo.goodBook == null) {
        return [];
      }
      return this.datainfo.goodBook;
    },
    classinfo() {
      return [
        "小说",
        "爱情",
        "历史",
        "外国文学",
        "青春",
        "励志",
        "随笔",
        "传记",
        "推理",
        "旅行",
        "奇幻",
        "经营"
      ];
    }
  }
};
</script>

<style>
</style>
