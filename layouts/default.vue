<template>
  <main>
    <Nav />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>

export default {
  name: 'Default'
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 4rem;
}
</style>
