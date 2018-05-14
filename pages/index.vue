<template>
  <div>
    <Menu/>
    <List/>
    <nuxt-link :to="{ name: 'home'}">
      home 页面
    </nuxt-link>
  </div>
</template>

<script>
import Menu from "~/components/menu.vue";
import List from "~/components/list.vue";
import axios from "~/plugins/axios";
export default {
  components: {
    Menu,
    List
  },
  async asyncData({ error }) {
    console.log(22);
    return await axios.get("/apiTest/users")
      .then(res => {
        return { data: res.data };
      })
      .catch(e => {
        error({ statusCode: 404, message: "User not found" });
      });
  },
  mounted() {
    this.F();
  },
  methods: {
    F() {}
  }
};
</script>