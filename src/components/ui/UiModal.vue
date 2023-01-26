<script lang="ts" setup>
import deleteSquare from '@/assets/icons/delete-square.svg'
import UiButton from '@/components/ui/UiButton.vue'
</script>

<template>
  <div
    class="flex flex-col justify-center items-start py-11 px-6 gap-8 bg-white shadow-lg rounded-lg w-[460px]"
  >
    <div class="flex justify-end items-start p-0 gap-2.5">
      <h2 class="font-dm-sans font-bold text-2xl flex items-center">
        <slot name="header">Header</slot>
      </h2>
      <a
        role="button"
        class="flex items-center pt-0 pr-0 pb-1 pl-0 gap-2 w-4 h-5"
      >
        <img class="w-4 h-4" :src="deleteSquare" />
      </a>
    </div>

    <div class="font-dm-sans font-normal text-sm text-neutral-700">
      <slot name="body">Lorem ipsum</slot>
    </div>
    <UiButton
      class="ui-btn-regular-size ui-btn-primary"
      :disabled="false"
      :active="true"
    >
      Fermer
    </UiButton>
  </div>
</template>
