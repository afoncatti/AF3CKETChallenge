<template>
  <div class="p-8">
    <h1>Events:</h1>
    <div class="grid grid-cols-4 gap-4">
      <EventCard
        v-for="event in eventList"
        :key="event.id"
        :card-info="event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventInterface } from '~/types/events'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    eventList (): EventInterface[] {
      return this.$accessor.events
    }
  },
  mounted () {
    this.$accessor.fetchEvents()
  }
})
</script>
