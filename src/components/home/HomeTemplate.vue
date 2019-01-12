<template>
  <div class="liang">
    <HeadNavBar></HeadNavBar>
    <HomeNavBar></HomeNavBar>
    <HomeText :datainfo="datainfo"></HomeText>
  </div>
</template>

<script>
import HeadNavBar from "../general/HeadNavBar"
import HomeNavBar from "./HomeNavBar"
import HomeText from "./HomeText"
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    HeadNavBar,HomeNavBar,HomeText
  },props:["datainfo"]
};
</script>

<style>
</style>
