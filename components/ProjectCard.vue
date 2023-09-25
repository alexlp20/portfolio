<script setup>
const props = defineProps(['desc', 'heading', 'icon', 'labels', "link"])

</script> 
<template>
    <a :href="link" class="w-[30%] h-max p-5 rounded-lg flex flex-col items-center bg-slate-300 dark:bg-slate-800 gap-4">
      <div class="p-3 rounded-lg bg-slate-400 dark:bg-slate-700">
        <Icon :name="icon" />
      </div>
      <h3 class="text-3xl font-bold"> {{ heading }}</h3>
      <p class="text-base text-slate-500 text-center px-10">{{ desc }}</p>
      <div class="flex justify-center gap-3 flex-wrap">
        <div class="text-base p-2 bg-slate-400 dark:bg-slate-700 rounded-xl font-bold"> {{ labels[0] }}</div>
        <div class="text-base p-2 bg-slate-400 dark:bg-slate-700 rounded-xl font-bold"> {{ labels[1] }}</div>
        <div class="text-base p-2 bg-slate-400 dark:bg-slate-700 rounded-xl font-bold"> {{ labels[2] }}</div>
      </div>
    </a>
</template>
