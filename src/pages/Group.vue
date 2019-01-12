<template>
  <div>
    <Group :groupdata="datainfo"></Group>
  </div>
</template>

<script>
import Group from "../components/group/GroupTemplate";
export default {
  data() {
    return {
      datainfo:[]
    };
  },
  methods: {},
  components: {
    Group
  },
  beforeCreate() {
    this.axios.get("/api/someApi").then(res => {
      this.datainfo = res.data;
    });
  }
};
</script>

<style>
</style>
