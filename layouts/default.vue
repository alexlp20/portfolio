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
    <div class="overflow-x-hidden dark:text-slate-200 duration-300 bg-slate-200 dark:bg-slate-900 n min-h-screen h-auto flex flex-col items-center">
      <div class="w-7/12 h-auto flex flex-col items-center min-h-screen ">
        <NavBar @toggle-theme="toggleTheme"/>
        <slot />
        <footer class="w-content items-center p-2 h-auto bg-slate-300 dark:bg-slate-700 mt-16 mb-4 rounded-md"><span class="mx-4 opacity-50"> Privacy Policy </span> </footer>
      </div>
    </div>
  </div>
</template>
