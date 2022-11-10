<script lang="ts" setup>
import UiOverflowContainer from './UiOverflowContainer.vue'
</script>

<template>
  <Story
    title="Overflow Container"
    :layout="{
      type: 'grid',
      width: 400,
    }"
    group="ui-base"
  >
    <Variant title="Test">
      <template #default>
        <UiOverflowContainer> </UiOverflowContainer>
      </template>
    </Variant>
  </Story>
</template>
