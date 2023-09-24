<script setup>
import GravityCanvas from '../components/GravityCanvas.vue'
</script>
<template>
  <div class="w-full h-[50vh] mt-[10%] flex justify-between items-center gap-10">
    <div class="flex flex-col justify-between h-3/5">
      <h1 class="text-4xl text-slate-500 font-bold"> I'M ALEJANDRO LAGUNA, <br>
        <span class="text-8xl text-slate-200">I code stuff</span>
      </h1>
      <div class="mt-10 flex gap-5">
        <a href="#projects" class="bg-slate-600 hover:bg-slate-700 duration-300 p-3 rounded-md font-bold"> Check out my
          projects </a>
        <a href="/contact" class="bg-slate-200 hover:bg-white duration-300 text-slate-600 p-3 rounded-md font-bold"> Email
          me! </a>
      </div>
    </div>
    <GravityCanvas />
  </div>
</template>
