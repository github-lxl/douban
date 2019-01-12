<template>
  <div>
    <HomeTemplate :datainfo="items"></HomeTemplate>
  </div>
</template>

<script>
import HomeTemplate from "../components/home/HomeTemplate";
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {},
  components: {
    HomeTemplate
  },
  beforeCreate() {
    this.axios.get("/api/someApi").then(res => {
      this.items = res.data.shouye;
      console.log(this.items)
    });
  }
};
</script>

<style>
</style>
