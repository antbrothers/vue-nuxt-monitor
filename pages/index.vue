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
  asyncData({ params, error }) {
    // return axios
    //   .get("/api/getRed")
    //   .then(res => {
    //     return { data: res.data };
    //   })
    //   .catch(e => {
    //     error({ statusCode: 404, message: "User not found" });
    //   });
  },
  mounted () {
    this.F()
  },
  methods: {
    F () {
      var p = []
      var A = new Function()
      console.log(A)
      A.prototype = []
      console.log(A)
      var a = new A()
        console.log(a)
      a.push(1)
      console.log(a.length)
      console.log(p.length)
    }
  } 
};
</script>