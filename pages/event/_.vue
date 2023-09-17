<template>
  <div>
    <HeaderTicket
      :image-url="computedBackground"
    />
    <div v-if="eventFetched" class="container mx-auto event-info-container">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_360px] md:gap-12 p-4">
        <div class="main-info relative">
          <h1 class="text-3xl text-primary font-bold mb-8">
            {{ eventInfo.name }}
          </h1>
          <div class="event-description mb-16">
            <p class="mb-2 text-primary-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui. Id leo in vitae turpis massa sed elementum tempus egestas. Tortor vitae purus faucibus ornare suspendisse. Molestie a iaculis at erat. Iaculis urna id volutpat lacus laoreet. Tempus imperdiet nulla malesuada pellentesque elit eget. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Semper auctor neque vitae tempus quam pellentesque nec nam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Dignissim cras tincidunt lobortis feugiat vivamus at. Vel pretium lectus quam id. Pretium lectus quam id leo in vitae. Pretium viverra suspendisse potenti nullam ac. Mauris vitae ultricies leo integer malesuada nunc vel. Mi ipsum faucibus vitae aliquet nec. Dignissim convallis aenean et tortor at.
            </p>
            <p class="mb-2 text-primary-grey">
              Tincidunt augue interdum velit euismod in pellentesque massa. Ornare arcu dui vivamus arcu felis bibendum ut. Quis varius quam quisque id. Vulputate mi sit amet mauris commodo quis imperdiet massa. Congue nisi vitae suscipit tellus. In iaculis nunc sed augue lacus viverra vitae congue eu. Risus quis varius quam quisque id diam vel quam. Natoque penatibus et magnis dis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Mauris sit amet massa vitae tortor condimentum lacinia. Et molestie ac feugiat sed lectus. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Aliquet risus feugiat in ante metus. Eu ultrices vitae auctor eu augue ut. Quis auctor elit sed vulputate mi sit amet mauris. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Sed faucibus turpis in eu mi bibendum. Amet facilisis magna etiam tempor. Auctor elit sed vulputate mi sit.
            </p>
            <p class="mb-2 text-primary-grey">
              Enim nulla aliquet porttitor lacus luctus. Sed odio morbi quis commodo odio aenean sed adipiscing. Viverra maecenas accumsan lacus vel facilisis volutpat. In hendrerit gravida rutrum quisque. Risus ultricies tristique nulla aliquet enim tortor at. Amet mattis vulputate enim nulla aliquet porttitor lacus. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In hendrerit gravida rutrum quisque non. Neque aliquam vestibulum morbi blandit. Nisi quis eleifend quam adipiscing vitae proin. Aliquam sem et tortor consequat id porta nibh. Quam nulla porttitor massa id neque. Ac turpis egestas maecenas pharetra convallis. Congue eu consequat ac felis donec et. Sem viverra aliquet eget sit. Neque convallis a cras semper auctor neque vitae tempus. Urna cursus eget nunc scelerisque viverra mauris in aliquam. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Duis ut diam quam nulla porttitor massa id neque. Orci phasellus egestas tellus rutrum tellus pellentesque.
            </p>
            <p class="mb-2 text-primary-grey">
              Posuere sollicitudin aliquam ultrices sagittis orci a. Viverra orci sagittis eu volutpat odio facilisis mauris. Morbi enim nunc faucibus a pellentesque sit. Sodales ut eu sem integer vitae justo eget magna. Congue quisque egestas diam in arcu cursus euismod quis viverra. Rhoncus urna neque viverra justo nec ultrices dui sapien. Lacus laoreet non curabitur gravida arcu. Feugiat in ante metus dictum at. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Convallis aenean et tortor at. Sit amet massa vitae tortor. Velit ut tortor pretium viverra suspendisse. Aenean vel elit scelerisque mauris pellentesque pulvinar. Non blandit massa enim nec dui nunc mattis enim ut. Vel facilisis volutpat est velit egestas dui id. Velit scelerisque in dictum non. Ornare massa eget egestas purus viverra accumsan in nisl. Libero enim sed faucibus turpis.
            </p>
            <p class="mb-2 text-primary-grey">
              Ut consequat semper viverra nam libero justo. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Tristique magna sit amet purus gravida. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Eget aliquet nibh praesent tristique magna. Amet nisl suscipit adipiscing bibendum est ultricies. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ipsum dolor sit amet consectetur. Sed euismod nisi porta lorem. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
            </p>
          </div>
        </div>
        <div ref="databoxContainer" class="databox-container relative">
          <div ref="databox" class="databox h-fit rounded-xl overflow-hidden border-2 border-secondary fixed md:sticky">
            <div class="bg-secondary">
              <p class="text-white p-4">
                Dados
              </p>
            </div>
            <div class="bg-white info-line flex flex justify-start align-center p-4 pt-6">
              <span class="w-8 h-6 mr-2 text-left text-primary i-lucide-calendar" /> <span class="info text-primary-grey">{{ formatDate(eventInfo.starts_at) }} - {{ formatDate(eventInfo.ends_at) }}</span>
            </div>
            <div class="bg-white info-line flex flex justify-start align-center p-4">
              <p class="w-8 h-6 mr-2 text-left text-primary i-lucide-ticket" /> <p class="info text-primary-grey">
                {{ formatPrice(eventInfo.price_range.minimum.amount) }}<span v-if="eventInfo.price_range.minimum.amount !== eventInfo.price_range.maximum.amount" class="info text-primary-grey"> - {{ formatPrice(eventInfo.price_range.maximum.amount) }}</span> {{ eventInfo.price_range.maximum.currency }}
              </p>
            </div>
            <div class="bg-white info-line flex flex justify-start align-center p-4">
              <p
                class="w-8 h-6 mr-2 text-left text-primary"
                :class="eventInfo.has_live ? 'i-lucide-video' : 'i-lucide-video-off'"
              /><p class="info text-primary-grey">
                Evento {{ eventInfo.has_live ? 'com' : 'sem' }} live streaming
              </p>
            </div>
          </div>
        </div>
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
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
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
    },
    formatPrice (price: number): string {
      return price.toFixed(2).replace('.', ',')
    },
    handleScroll () {
      const databox = this.$refs.databox as HTMLElement
      const databoxContainer = this.$refs.databoxContainer as HTMLElement
      if (databox) {
        if (databoxContainer.offsetTop + databox.offsetHeight + 130 > window.scrollY + window.screen.availHeight) {
          databox.classList.add('fixed')
          databox.classList.remove('relative')
        } else {
          databox.classList.add('relative')
          databox.classList.remove('fixed')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.event-info-container {
  width: 1100px;
  max-width: 100%;
  min-height: 30vh;
}
.databox-container {
  min-height: 240px;
}
.databox {
  @media (max-width:48rem) {
    margin-top:auto;
    left: 0;
    bottom: -0.6rem;
    width: 100%;
  }
  @media (min-width:48rem) {
    top: 5rem;
  }
}
</style>
