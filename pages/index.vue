<template>
  <section class="container">
    <div>
      <AppLogo/>      
        <nuxt-link :to="{ name: 'home'}">
          home 页面
        </nuxt-link>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>

</style>
