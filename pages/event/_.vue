<template>
  <div>
    <h1>Event Page {{ $route.params.slug }}</h1>
    <pre v-if="eventInfo[$route.params.pathMatch]">{{ eventInfo }}</pre>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventPage',
  computed: {
    eventInfo () {
      return this.$accessor.eventsBySlug
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
        }
      })
    }
  }
}
</script>
