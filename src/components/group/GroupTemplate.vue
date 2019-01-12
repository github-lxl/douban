<template>
  <div class="group">
    <HeadNavBar :datainfo="datainfo"></HeadNavBar>
    <GroupItems :groupdatainfo="xiaozu1" title="租房快报"></GroupItems>
    <GroupItems :groupdatainfo="xiaozu2" title="教育学习"></GroupItems>
    <GroupItems :groupdatainfo="xiaozu3" title="淘淘快报"></GroupItems>
    <Bootom></Bootom>
  </div>
</template>

<script>
import HeadNavBar from "../general/HeadNavBar";
import GroupItems from "./Groupitems";
import Bootom from "../general/BootomNavBar";
export default {
  data() {
    return {
      datainfo: [
        { title: "豆瓣App", href: "/group" },
        { title: "登录", href: "/login" },
        { title: "注册", href: "/registration" }
      ]
    };
  },
  methods: {},
  props: ["groupdata"],
  components: {
    HeadNavBar,
    GroupItems,
    Bootom
  },
  computed: {
    xiaozu1() {
      console.log(this.groupdata);
      return this.groupdata.xiaozua;
    },
    xiaozu2() {
      return this.groupdata.xiaozub;
    },
    xiaozu3() {
      return this.groupdata.xiaozuc;
    }
  }
};
</script>

<style>
</style>
