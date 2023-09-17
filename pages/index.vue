<template>
  <div>
    <Header>
      <div class="container width54rem max-w-full mx-auto">
        <div class="flex mx-auto py-4 px-12 rounded-lg bg-secondary bg-opacity-80">
          <div class="flex-grow-1 input w-76">
            <FormInput
              v-model="search"
              label="Filtrar"
            />
          </div>
          <div class="flex-shrink-1 select-field pl-4">
            <FormSelect
              v-model="sortBy"
              :options="sortOptions"
              label="Filtrar"
              placeholder="Ordenar por"
            />
          </div>
        </div>
      </div>
    </Header>
    <div class="container mx-auto">
      <div class="flex flex-row flex-wrap justify-center">
        <CardEvent
          v-for="event in sortedEventList"
          :key="event.id"
          :card-info="event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventInterface } from '~/types/events'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      search: '',
      sortBy: '',
      sortOptions: [
        { value: 'name', label: 'Nome' },
        { value: 'starts_at', label: 'Data' },
        { value: 'minimum_price', label: 'Preço' }
      ],
      sortDirection: true
    }
  },
  computed: {
    filteredList (): EventInterface[] {
      if (this.search) {
        return this.$accessor.events.filter((event) => {
          return event.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return this.$accessor.events
    },
    sortedEventList (): EventInterface[] {
      if (!this.sortBy) {
        return this.filteredList
      }
      const sortedList = [...this.filteredList]
      sortedList.sort((a: EventInterface, b: EventInterface) => {
        if (this.sortBy === 'starts_at') {
          return new Date(a.starts_at).getTime() - new Date(b.starts_at).getTime()
        } else if (this.sortBy === 'minimum_price') {
          return a.price_range.minimum.amount - b.price_range.minimum.amount
        } else {
          return a.name.localeCompare(b.name)
        }
      })
      return sortedList
    }
  },
  mounted () {
    if (this.sortedEventList.length === 0) {
      this.$accessor.fetchEvents()
    }
  }
})
</script>

<style lang="scss" scoped>
.width54rem {
  width: 54rem;
}
.flex-grow-1 {
  flex-grow: 1;
}
.select-field {
  min-width: 160px;
}
</style>
