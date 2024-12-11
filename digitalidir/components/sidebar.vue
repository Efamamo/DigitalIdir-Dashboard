<template>
  <div class="px-2 w-64 shadow-md min-h-screen">
    <h3 class="text-2xl font-bold px-2 py-6 text-gray-500 text-center">
      Digital Idir
    </h3>

    <p class="text-xs mb-2 px-1 text-gray-500">USER</p>
    <div class="mb-6">
      <Singlebar name="Dashboard" icon="desktop" />
      <Singlebar
        name="Permissions"
        icon="lock"
        :links="[{ name: 'All Permissions', ref: '/permissions' }]"
      />
      <Singlebar
        name="Roles"
        icon="user-shield"
        :links="[
          { name: 'All Roles', ref: '/roles' },
          { name: 'Add Role', ref: '/roles/add' },
        ]"
      />
      <Singlebar
        name="Admins"
        icon="crown"
        :links="[
          { name: 'All Admins', ref: '/admins' },
          { name: 'Add Admin', ref: '/admins/add' },
        ]"
      />
      <Singlebar
        name="Users"
        icon="users"
        :links="[{ name: 'All Users', ref: '/users' }]"
      />
    </div>

    <p class="text-xs mb-2 px-1 text-gray-500">MAIN</p>
    <div>
      <Singlebar
        name="News"
        icon="newspaper"
        :links="[
          { name: 'All News', ref: '/news' },
          { name: 'Add News', ref: '/news/add' },
        ]"
      />
      <Singlebar
        name="Events"
        icon="calendar-alt"
        :links="[
          { name: 'All Events', ref: '/events' },
          { name: 'Add Event', ref: '/events/add' },
        ]"
      />
      <Singlebar
        name="Announcements"
        icon="bullhorn"
        :links="[
          { name: 'All Announcements', ref: '/announcements' },
          { name: 'Add Announcement', ref: '/announcements/add' },
        ]"
      />
      <Singlebar
        name="Items"
        icon="box"
        :links="[
          { name: 'All Items', ref: '/items' },
          { name: 'Add Item', ref: '/items/add' },
        ]"
      />
      <Singlebar
        name="Memorials"
        icon="monument"
        :links="[
          { name: 'All Memorials', ref: '/memorials' },
          { name: 'Add Memorial', ref: '/memorials/add' },
        ]"
      />
      <Singlebar
        name="Transactions"
        icon="exchange-alt"
        :links="[{ name: 'All Transactions', ref: '/transactions' }]"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
