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
import Menu from '~/components/menu.vue'
import List from "~/components/list.vue";
export default {
  components: {   
    Menu,
    List
  }
}
</script>
