<script setup>
import NavBar from '../components/NavBar.vue';

let isDark = ref(true);

function toggleTheme() { 
  isDark.value = !isDark.value;
  console.log('cheerio')
}
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="text-slate-900 dark:text-slate-200 duration-300 w-screen bg-slate-200 dark:bg-slate-900 n min-h-screen h-auto flex justify-center">
      <div class="w-7/12 h-screen">
        <NavBar @toggle-theme="toggleTheme"/>
        <slot />
      </div>
    </div>
  </div>
</template>
