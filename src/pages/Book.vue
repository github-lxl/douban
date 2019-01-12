<template>
  <div>
    <Book :datainfo="items"></Book>
  </div>
</template>

<script>
import Book from "../components/book/BookTemplate";
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {},
  beforeCreate() {
    this.axios.get("/api/someApi").then(res => {
      this.items = res.data;
      console.log(this.items);
    });
  },
  components: {
    Book
  }
};
</script>

<style>
</style>
