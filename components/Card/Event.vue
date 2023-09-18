<template>
  <div class="flex card w-72 sm:w-96 m-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg">
    <nuxt-link
      :to="`/event/${cardInfo.slug}`"
      class="w-72 sm:w-96 h-60 bg-cover bg-center rounded-t-lg overflow-hidden"
    >
      <div
        class="w-72 sm:w-96 h-60 bg-cover bg-center rounded-t-lg overflow-hidden relative"
        :style="{ backgroundImage: `url(${eventImg})` }"
      >
        <span class="image-filter bg-primary" />
      </div>
    </nuxt-link>
    <div class="p-5 card-info-box">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{{ cardInfo.name }}</h5>
      </a>
      <div class="card-info text-zinc-600">
        <div class="info-line flex flex justify-start align-center pb-2">
          <span class="w-6 h-4 mr-2 my-1 text-left i-lucide-map-pin" /> <span class="info">{{ cardInfo.location.country }}, {{ cardInfo.location.location }}</span>
        </div>
        <div class="info-line flex flex justify-start align-center pb-2">
          <span class="w-6 h-4 mr-2 my-1 text-left i-lucide-calendar" /> <span class="info">{{ formatDate(cardInfo.starts_at) }}</span>
        </div>
        <div class="info-line flex flex justify-start align-center pb-2">
          <span class="w-6 h-4 mr-2 my-1 text-left i-lucide-ticket" /> <span class="info">A partir de {{ cardInfo.price_range.minimum.amount }} {{ cardInfo.price_range.minimum.currency }}</span>
        </div>
      </div>
    </div>
    <nuxt-link :to="`/event/${cardInfo.slug}`" class="h-14 flex flex-row justify-center items-center text-sm font-medium text-center text-white bg-primary rounded-b-md px-4">
      Mais informações
      <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </nuxt-link>
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
  },
  methods: {
    formatDate (date: string): string {
      return new Date(date).toLocaleDateString('pt-PT')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);
    .image-filter {
      opacity: 0;
    }
  }
  &:active {
    .image-filter {
      opacity: 0;
    }
  }
  span.image-filter {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  .card-info-box {
    flex-grow: 1;
  }
}
</style>
