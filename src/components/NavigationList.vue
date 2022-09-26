<script setup lang="ts">
const items = [
  {
    to: "/",
    text: "Home",
    icon: "home"
  },
  {
    text: "Explore",
    icon: "hashtag"
  },
  {
    text: "Contact",
    icon: "bell"
  },
  {
    text: "Messages",
    icon: "mail"
  },
  {
    text: "Bookmarks",
    icon: "bookmark"
  },
  {
    text: "Lists",
    icon: "document-text"
  },
  {
    text: "Profile",
    icon: "user"
  }
]
</script>

<template>
  <ul class="flex flex-col">
    <NavigationLink
      v-for="item in items"
      :key="item.text"
      :to="item.to"
      :text="item.text"
      :icon="item.icon"
    />
  </ul>
</template>
