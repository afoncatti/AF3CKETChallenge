<template>
  <footer class="relative text-center bg-secondary">
    <div class="flex flex-wrap items-center justify-between mx-4 py-10">
      <nuxt-link to="/" class="flex items-center">
        <img src="https://uploads-ssl.webflow.com/5fadeb48e2a40d1b7381d949/5fb537160c4524a8b179b43e_3cket_logo_white.svg" class="h-8 mr-3" alt="Logótipo 3cket">
      </nuxt-link>
      <div class="text-white flex flex-column apps-container">
        Compre pelo APP
        <img src="@/assets/images/android.svg" alt="Aplicação para Android" class="ml-4">
        <img src="@/assets/images/apple.svg" alt="Aplicação para Iphone" class="ml-4">
      </div>
    </div>
    <div class="footer-info text-sm font-light mx-4 py-4 text-slate-100 text-left">
      © 2023 3cket Ticketing Solutions - Todos os direitos reservados.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault'
}
</script>

<style lang="scss" scoped>
.apps-container {
  align-items: center;
}
.footer-info {
  border-top: 1px solid #452F86;
}
</style>
