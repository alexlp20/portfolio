<script setup>

const props = defineProps(['href', 'content'])

</script> 

<template> 
  <a id="link" class="font-black text-xl" :href="href">{{content}}</a>
</template>

<style scoped> 

#link { 
  position: relative;
}

#link::before {  
  content: " ";
  @apply bg-slate-800 dark:bg-slate-300 -bottom-1 absolute w-0 h-[5px] duration-500;
}

#link:hover::before { 
  width: 100%;
}

</style>


