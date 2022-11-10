<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import UiTravelTime from '../ui/UiTravelTime.vue'
import type { TravelTimeModel } from '@/model/travel-time.model'

const state = reactive({
  travelTimes: null as null | TravelTimeModel[],
})

onMounted(async () => {
  state.travelTimes = await apiClientService.fetchTravelTime()
})
</script>

<template>
  <swiper :navigation="true" :modules="[Navigation]">
    <template v-for="(travelTime, index) in state.travelTimes" :key="index">
      <swiper-slide>
        <UiTravelTime
          class="flex-none"
          :newDuration="travelTime.new"
          :oldDuration="travelTime.old"
          :lineNumber="travelTime.line"
          :startStation="travelTime.start"
          :endStation="travelTime.end"
        ></UiTravelTime>
      </swiper-slide>
    </template>
  </swiper>
</template>
