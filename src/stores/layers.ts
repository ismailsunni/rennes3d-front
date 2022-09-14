import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type TransportLayers = 'metro' | 'bus' | 'tram'
export type TransportLayersVisibility = Record<TransportLayers, boolean>

export const useLayersStore = defineStore('layers', () => {
  const visibilities: Ref<TransportLayersVisibility> = ref({
    metro: false,
    bus: false,
    tram: false,
  })

  function toggleLayer(name: TransportLayers) {
    visibilities.value = {
      ...visibilities.value,
      [name]: !visibilities.value[name],
    }
  }
  return { visibilities, toggleLayer }
})
