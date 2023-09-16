/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { AxiosResponse } from 'axios'
import { EventInterface } from '~/types/events'

export interface State {
  events: EventInterface[],
  eventsBySlug: {
    [key: string]: EventInterface
  }
  [key: string]: any
}

export const state = () => ({
  events: [],
  eventsBySlug: {}
}) as State

export const getters = {
  getEvents (state: State) {
    return state.events
  }
}

export const mutations = mutationTree(state, {
  setEvents (state: State, events: EventInterface[]) {
    state.events = events
  },
  setEvent (state: State, { slug, eventInfo }: { slug: string, eventInfo: EventInterface }) {
    Vue.set(state.eventsBySlug, slug, eventInfo)
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchEvents (): Promise<boolean> {
      let res: AxiosResponse
      try {
        res = await (this as any).$axios.get('/events')
        if (res.status !== 200) {
          return false
        } else {
          this.commit('setEvents', res.data?.data)
        }
        return true
      } catch (err: any) {
        throw new Error(err)
      }
    },
    async fetchEventBySlug ({ commit }, slug: string): Promise<boolean> {
      let res: AxiosResponse
      try {
        res = await (this as any).$axios.get(`/events/${slug}`)
        if (res.status !== 200) {
          return false
        } else {
          this.commit('setEvent', {
            slug,
            eventInfo: res.data?.data
          })
        }
        return true
      } catch (err: any) {
        throw new Error(err)
      }
    }
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
})
