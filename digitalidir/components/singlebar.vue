<template>
  <div>
    <div
      class="pl-2 py-3.5 cursor-pointer flex justify-between items-center pr-3"
    >
      <div class="flex gap-2 items-center">
        <FontAwesomeIcon :icon="icon" class="text-gray-600 w-6 h-10 text-sm" />
        <h3 class="text-gray-600 text-sm">{{ name }}</h3>
      </div>

      <div v-on:click="toggleDropdown">
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
      <p>Category 1</p>
      <p>Category 2</p>
      <p>Category 2</p>
    </div>
  </div>
</template>

<script setup>
const toggleDropdown = () => {
  show.value = !show.value;
};
let show = ref(false);
const { name, icon } = defineProps(['name', 'icon']);
</script>
