<template>
  <div v-on:click="toggleDropdown">
    <div
      class="pl-2 py-3.5 cursor-pointer flex justify-between items-center pr-3"
    >
      <div class="flex gap-2 items-center">
        <FontAwesomeIcon :icon="icon" class="text-gray-600 w-6 h-10 text-sm" />
        <h3 class="text-gray-600 text-sm">{{ name }}</h3>
      </div>

      <div>
        <FontAwesomeIcon
          v-if="!show"
          icon="plus"
          class="text-gray-600 text-xs font-bold"
        />
        <FontAwesomeIcon
          v-if="show"
          icon="minus"
          class="text-gray-600 text-xs font-bold"
        />
      </div>
    </div>
    <div v-show="show" class="text-sm pl-6">
      <nuxt-link
        :to="link.ref"
        v-for="link in links"
        :key="link.name"
        class="flex gap-3 items-center pb-3"
      >
        <FontAwesomeIcon icon="angle-right" class="text-gray-600 text-xs" />
        <p class="text-gray-600 text-sm">{{ link.name }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const toggleDropdown = () => {
  show.value = !show.value;
};
let show = ref(false);
const { name, icon, links } = defineProps(['name', 'icon', 'links']);
</script>
