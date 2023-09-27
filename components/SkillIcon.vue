<script setup>
const props = defineProps(['icon', 'text', 'href']);
</script>
<template>
  <div class="flex flex-col w-1/5 items-center text-2xl font-bold gap-5">
    <Icon :name="icon" class="text-8xl aspect-square" />
    <NavLink :href="href" :content="text" />
  </div>
</template>
