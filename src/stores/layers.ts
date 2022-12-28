import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type Layers =
  | 'metro'
  | 'bus'
  | 'bike'
  | 'trambusLines'
  | 'trambusStops'
  | 'parking'
  | 'poi'
export type LayersVisibility = Record<Layers, boolean>

export const useLayersStore = defineStore('layers', () => {
  const visibilities: Ref<LayersVisibility> = ref({
    metro: false,
    bus: false,
    bike: false,
    trambusLines: false,
    trambusStops: false,
    parking: false,
    poi: false,
  })

  function toggleLayer(name: Layers) {
    visibilities.value = {
      ...visibilities.value,
      [name]: !visibilities.value[name],
    }
  }
  return { visibilities, toggleLayer }
})
