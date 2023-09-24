<script setup>
import NavLink from './NavLink.vue';

const emit = defineEmits(['toggle-theme'])
const isDark = ref(true);

function toggleTheme() { 
  emit('toggle-theme');
  isDark.value = !isDark.value;
}
</script>

<template>
  <nav class="w-full h-[10vh] flex items-center justify-between">
    <div class="flex gap-4 items-center px-5">
      <NavLink content="home" href="/" />
      <NavLink content="skills" href="/skills" />
      <NavLink content="experience" href="/experience" />
      <NavLink content="blog" href="/blog" />
      <NavLink content="contact" href="/contact" />
    </div>
    <div> 
      <Icon 
        :name="isDark ? 'material-symbols:dark-mode-rounded' : 'material-symbols:light-mode'" 
        class="text-4xl hover:cursor-pointer hover:rotate-[360deg] duration-1000" 
        @click="toggleTheme"/>
    </div>
  </nav>
</template>
