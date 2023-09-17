<template>
  <div>
    <HeaderTicket
      :image-url="computedBackground"
    />
    <div v-if="eventFetched" class="container mx-auto">
      <h1>{{ eventInfo.name }}</h1>
      <div class="info-line flex flex justify-start align-center pb-2">
        <span class="w-6 h-4 mr-2 my-1 text-left i-lucide-calendar" /> <span class="info">{{ formatDate(eventInfo.starts_at) }}</span>
      </div>
      <div class="info-line flex flex justify-start align-center pb-2">
        <span class="w-6 h-4 mr-2 my-1 text-left i-lucide-ticket" /> <span class="info">A partir de {{ eventInfo.price_range.minimum.amount }} {{ eventInfo.price_range.minimum.currency }}</span>
      </div>
    </div>
    <div v-else>
      Buscando informações do evento...
    </div>
  </div>
</template>

<script lang="ts">
import { EventInterface } from '~/types/events'

export default {
  name: 'EventPage',
  data () {
    return {
      eventFetched: false
    }
  },
  computed: {
    eventInfo (): EventInterface {
      if (this.eventFetched) {
        return this.$accessor.eventsBySlug[this.$route.params.pathMatch]
      } else {
        return { } as EventInterface
      }
    },
    computedBackground () {
      if (this.eventFetched) {
        return this.eventInfo?.theme?.background_image?.url || ''
      }
      return ''
    }
  },
  mounted () {
    this.fetchEventBySlug()
  },
  methods: {
    fetchEventBySlug () {
      this.$accessor.fetchEventBySlug(this.$route.params.pathMatch).then((result) => {
        if (!result) {
          setTimeout(() => {
            this.fetchEventBySlug()
          }, 1000)
        } else {
          this.eventFetched = true
        }
      })
    },
    formatDate (date: string): string {
      return new Date(date).toLocaleDateString('pt-PT')
    }
  }
}
</script>
