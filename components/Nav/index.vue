<template>
  <nav
    class="fixed"
    :class="invisibleNav ? '' : 'bg-primary'"
  >
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <nuxt-link to="/" class="flex items-center">
        <img src="https://uploads-ssl.webflow.com/5fadeb48e2a40d1b7381d949/5fb537160c4524a8b179b43e_3cket_logo_white.svg" class="h-8 mr-3" alt="Logótipo 3cket">
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavDefault',
  computed: {
    invisibleNav () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
</style>
