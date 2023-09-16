import Vue from 'vue'
import { accessorType } from '~/store'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }

  interface Context {
    $accessor: typeof accessorType,
  }
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
