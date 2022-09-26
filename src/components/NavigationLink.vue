<script setup lang="ts">
defineProps<{
  to?: string
  text: string
  icon?: string
}>()
</script>

<template>
  <li class="flex-1 py-1">
    <nuxt-link :to="to" class="block h-full">
      <div
        class="flex w-min flex-col items-center justify-center rounded-full p-3 transition-colors hover:bg-black/10 dark:hover:bg-dim-200 lg:flex-row lg:justify-start"
      >
        <Icon
          :name="'heroicons-outline:' + icon"
          size="32"
          class="text-dark dark:text-white"
          :aria-label="text"
        />
        <span class="ml-5 mr-4 hidden text-xl dark:text-white lg:block">
          {{ text }}
        </span>
      </div>
    </nuxt-link>
  </li>
</template>

<style scoped>
a.active,
a.exact {
  @apply font-bold;
}
</style>
