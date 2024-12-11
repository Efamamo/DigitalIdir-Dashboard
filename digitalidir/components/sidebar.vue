<template>
  <div class="px-2 w-2/12 shadow-md min-h-screen">
    <h3 class="text-2xl font-bold px-2 py-6 text-gray-500 text-center">
      Digital Idir
    </h3>

    <p class="text-xs mb-2 px-1 text-gray-500">USER</p>
    <div class="mb-6">
      <Singlebar name="Dashboard" icon="desktop" />
      <Singlebar name="Permissions" icon="lock" />
      <Singlebar name="Roles" icon="user-shield" />
      <Singlebar name="Admins" icon="crown" />
      <Singlebar name="Users" icon="users" />
    </div>

    <p class="text-xs mb-2 px-1 text-gray-500">MAIN</p>
    <div>
      <Singlebar name="News" icon="newspaper" />
      <Singlebar name="Events" icon="calendar-alt" />
      <Singlebar name="Announcements" icon="bullhorn" />
      <Singlebar name="Items" icon="box" />
      <Singlebar name="Memorials" icon="monument" />
      <Singlebar name="Transactions" icon="exchange-alt" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
