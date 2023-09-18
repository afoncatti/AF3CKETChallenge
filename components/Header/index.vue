<template>
  <header class="relative text-center py-8 px-2 sm:p-8">
    <div class="animated-header overflow-hidden">
      <VisualsAnimatedBackground />
    </div>
    <h2 class="font-bold text-white text-5xl">
      Se joga, <span class="text-cyan-100">viver é agora!</span>
    </h2>
    <p class="pt-4 pb-10 text-slate-300">
      Temos imensas sugestões e eventos fantásticos.
    </p>
    <slot />
  </header>
</template>

<script>
export default {
  name: 'HeaderDefault'
}
</script>

<style lang="scss" scoped>
.animated-header {
  position: absolute;
  top: -4rem;
  left: 0;
  width: 100%;
  height: calc(100% + 4rem);
  z-index: -1;
  clip-path: polygon(0% 0, 100% 0%, 100% 70%, 0% 100%);
}
</style>
