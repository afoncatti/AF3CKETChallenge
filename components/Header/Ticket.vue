<template>
  <header class="relative pt-8 pb-16 text-center overflow-hidden">
    <div
      class="header-image bg-primary"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    />
    <div class="image-container mx-auto rounded-2xl shadow-2xl overflow-hidden">
      <div
        class="container image"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderDefault',
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header-image {
  position: absolute;
  top: -15%;
  left: -15%;
  width: 130%;
  height: 130%;
  z-index: -1;
  background-size: 120%;
  background-position: center;
  clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
  filter: blur(40px);
}
.image-container {
  width: 760px;
  max-width: 90%;
  .image {
    padding-top: 50%;
    background-size: cover;
    background-position: center;
  }
}
</style>
