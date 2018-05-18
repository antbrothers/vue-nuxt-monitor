<template>
  <div>
    <Menu/>
    <List v-bind:hotList= "data.data"/>
    <nuxt-link :to="{ name: 'home'}">
      home 页面
    </nuxt-link>
  </div>
</template>

<script>
import Menu from "~/components/menu.vue";
import List from "~/components/list.vue";
import axios from "~/plugins/axios";
import { mapState, mapActions} from "vuex";
export default {
  components: {
    Menu,
    List
  },
  computed: {
    ...mapState({
      hotData: (state) => state.fileStore.data
    })
  },
  async asyncData({error}) {       
    return await axios.get("/api/getRed")
      .then(res => {       
        return { data: res.data };
      })
      .catch(e => {
         error({ statusCode: 404, message: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3002}/api/getRed not found`});      
      });  
  },
  mounted() {  
    this.F();
  }, 
  methods: {
    F() {     
      this.$store.dispatch('getHotFile')        
    }
  }
};
</script>