<template>
  <div>
    <MovieTemplate :datainfo="datainfo"></MovieTemplate>
  </div>
</template>

<script>
import MovieTemplate from "../components/movie/MovieTemplate";
export default {
  data() {
    return {
      items: [],
      goodMovie: [],
      datainfo: []
    };
  },
  methods: {},
  components: {
    MovieTemplate
  },
  computed: {},
  beforeCreate() {
    // /api/someApi
    this.axios.get("/api/someApi").then(res => {
      this.datainfo = res.data;
    });
  }
};
</script>

<style scoped>
</style>
