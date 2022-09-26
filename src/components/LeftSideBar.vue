<template>
  <aside class="flex flex-col justify-between">
    <div
      class="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full p-2 transition-colors hover:bg-blue-100 dark:hover:bg-white/20"
    >
      <nuxt-link to="/">
        <div class="flex w-fit items-center justify-center">
          <Icon
            name="bxl:twitter"
            size="32"
            class="text-blue-400 dark:text-white"
          />
        </div>
      </nuxt-link>
    </div>
    <TheNavigation />
  </aside>
</template>
