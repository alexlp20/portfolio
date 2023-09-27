<script setup>
import SkillIcon from '../components/SkillIcon.vue';
</script>
<template>
  <div class="w-full min-h-[85vh] p-10">
    <div>
      <h2 class="text-5xl font-black">
        My Skills
      </h2>
      <div class="w-full flex justify-around flex-wrap items-center mt-5">
        <SkillIcon icon="mdi:nuxt" href="https://nuxt.com/" text="NuxtJS" />
        <SkillIcon icon="mdi:language-javascript" href="https://www.javascript.com/" text="JavaScript" />
        <SkillIcon icon="mdi:vuejs" href="https://nuxt.com/" text="VueJS" />
        <SkillIcon icon="mdi:react" href="https://nuxt.com/" text="ReactJS" />
        <SkillIcon icon="teenyicons:nextjs-solid" href="https://laravel.com/" text="NextJS" />
        <SkillIcon icon="mdi:language-php" href="https://www.typescriptlang.org/" text="PHP" />
        <SkillIcon icon="mdi:language-html5" href="https://www.javascript.com/" text="HTML" />
        <SkillIcon icon="devicon-plain:vim" href="https://nuxt.com/" text="Vim" />
        <SkillIcon icon="bxl:postgresql" href="https://nuxt.com/" text="PostgreSQL" />
        <SkillIcon icon="simple-icons:mongodb" href="https://nuxt.com/" text="MongoDB" />
        <SkillIcon icon="uil:linux" href="https://nuxt.com/" text="Linux" />
        <SkillIcon icon="devicon-plain:bash" href="https://nuxt.com/" text="Bash" />
        <SkillIcon icon="simple-icons:fastapi" href="https://nuxt.com/" text="FastAPI" />
        <SkillIcon icon="simple-icons:express" href="https://nuxt.com/" text="ExpressJS" />
      </div>
    </div>
    <br>
    <hr class="mt-5 mb-10 border-slate-300 dark:border-slate-800 duration-300 w-full" />
    <div>
      <h2 class="text-2xl text-center text-slate-800 dark:text-slate-300 mb-5 font-black">
        I am currently enjoying this technologies :)
      </h2>
      <div class="w-full flex justify-around">
        <SkillIcon icon="mdi:laravel" href="https://laravel.com/" text="Laravel" />
        <SkillIcon icon="mdi:language-typescript" href="https://www.typescriptlang.org/" text="TypeScript" />
        <SkillIcon icon="mdi:tailwind" href="" text="TailwindCSS" />
        <SkillIcon icon="simple-icons:bun" href="" text="Bun" />
      </div>
    </div>
  </div>
</template>
