<template>
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <nuxt-link :to="`/event/${cardInfo.slug}`">
      <div
        class="flex items-center justify-center h-32 bg-cover bg-center overflow-hidden rounded-t-lg"
        :style="{ backgroundImage: `url(${eventImg})` }"
      />
    </nuxt-link>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ cardInfo.name }}</h5>
      </a>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ cardInfo.price_range }}</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mais informações</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { EventInterface } from '~/types/events'
export default {
  name: 'EventCard',
  props: {
    cardInfo: {
      type: Object as PropType<EventInterface>,
      required: true
    }
  },
  computed: {
    eventImg () {
      return this.cardInfo.theme.background_image.url
    }
  }
}
</script>
