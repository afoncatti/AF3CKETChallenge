<template>
  <div class="flex-grow-1 flex flex-col">
    <Header>
      <div ref="filterContainer">
        <div
          ref="filter"
          class="filter-container mx-auto bg-secondary bg-opacity-80 py-2 px-4 sm:px-12"
          :class="isSticky ? 'stick-on-top' : ''"
        >
          <div class="flex flex-row">
            <div class="flex-grow-1">
              <FormInput
                v-model="search"
                label="Filtrar"
              />
            </div>
            <div class="w-40 ml-2">
              <FormSelect
                v-model="sortBy"
                :options="sortOptions"
                label="Filtrar"
                placeholder="Ordenar por"
              />
            </div>
          </div>
        </div>
      </div>
    </Header>
    <div v-if="eventsFetched && $accessor.events?.length > 0" class="flex-grow-1 flex flex-row flex-wrap justify-center container mx-auto ">
      <CardEvent
        v-for="event in sortedEventList"
        :key="event.id"
        :card-info="event"
      />
      <div
        v-if="sortedEventList.length < 1"
        class="flex-grow-1 flex flex-col justify-center items-center text-primary-grey text-center p-8"
      >
        <div class="flex flex-col justify-center items-center rounded-2xl p-8">
          <p class="i-lucide-search-x text-4xl text-primary mb-4" />
          Não foram encontrados eventos com os filtros selecionados. <br> Por favor, tente novamente com outros termos.
        </div>
      </div>
    </div>
    <div
      v-else
      class="flex-grow-1 flex flex-col justify-center items-center text-primary-grey text-center p-8"
    >
      <div class="w-48 p-8">
        <div class="pb-4">
          <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        Buscando eventos...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import event from '../components/Card/Event.vue'
import { EventInterface } from '~/types/events'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      eventsFetched: false as boolean,
      search: '' as string,
      sortBy: '' as string,
      isSticky: false,
      sortOptions: [
        { value: 'name', label: 'Nome' },
        { value: 'starts_at', label: 'Data' },
        { value: 'minimum_price', label: 'Preço' }
      ] as Object[],
      sortDirection: true as boolean
    }
  },
  computed: {
    event () {
      return event
    },
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
      this.$accessor.fetchEvents().then((result) => {
        if (!result) {
          setTimeout(() => {
            this.$accessor.fetchEvents()
          }, 1000)
        } else {
          setTimeout(() => {
            this.eventsFetched = true
          }, 1000)
        }
      })
    } else {
      this.eventsFetched = true
    }
    this.setObserver()
  },
  methods: {
    setObserver () {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isSticky = false
          } else {
            this.isSticky = true
          }
        })
      }, options)
      observer.observe(this.$refs.filterContainer as Element)
    }
  }
})
</script>

<style lang="scss" scoped>
.filter-container {
  position: relative;
  max-width: 100%;
  width: 920px;
  transition: width 0.2s ease-in-out;
  border-radius: 0.5rem;
  &.stick-on-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 90;
    padding-left: 200px;
    padding-right: 0.5rem;
    border-radius: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    &.stick-on-top {
      padding-left: 0.5rem;
      padding-top: 64px;
    }
  }
}
</style>
