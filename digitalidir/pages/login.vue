<template>
  <div class="max-w-xl mx-auto shadow-md rounded-md p-10 mt-8 md:mt-40">
    <h3 class="text-center text-2xl font-bold">Login</h3>
    <form v-on:submit.prevent="handleSubmit">
      <div class="flex flex-col gap-2 mb-4">
        <label for="email">Email</label>
        <input
          class="border border-gray-300 focus:outline-none p-1 rounded-sm"
          type="email"
          id="email"
        />
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label for="password">Password</label>
        <input
          class="border border-gray-300 focus:outline-none p-1 rounded-sm"
          type="password"
          id="password"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 p-1.5 mt-4 text-white font-semibold rounded-sm"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
useHead({
  title: 'DigitalIdir | Login',
});

const handleSubmit = () => {
  window.location.href = '/dashboard';
};

definePageMeta({
  layout: 'login',
});
</script>

<style scoped></style>
