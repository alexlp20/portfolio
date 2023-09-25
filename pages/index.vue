<script setup>
import NavLink from '../components/NavLink.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ArtASCII from '../components/ArtASCII';
</script>
<template>
  <div class="w-full h-[50vh] mt-[10%] flex justify-between items-center gap-10">
    <div class="flex flex-col justify-between h-3/5">
      <h1 class="text-4xl text-slate-500 font-bold"> I'M ALEJANDRO LAGUNA, <br>
        <span class="text-8xl text-slate-800 duration-300 dark:text-slate-200">I code stuff</span>
      </h1>
      <div class="mt-10 flex gap-5">
        <a href="#projects"
          class="bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700 duration-300 p-3 rounded-md font-bold">
          Check out my
          projects </a>
        <a href="/contact"
          class="bg-slate-600 hover:bg-slate-500 dark:bg-slate-200 dark:hover:bg-white duration-300 text-slate-200 dark:text-slate-600 p-3 rounded-md font-bold">
          Email
          me! </a>
      </div>
    </div>
    <ArtASCII />
  </div>
  <hr class="mt-5 mb-16 border-slate-300 dark:border-slate-800 duration-300 w-full" />
  <div id="projects" class="flex h-auto w-full flex-col items-center text-4xl">
    <NavLink href="#projects" content="projects" />
    <div class="w-full min-h-[50vh] h-full flex flex-wrap justify-center gap-5 py-5">
      <ProjectCard
        desc="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        heading="Project Lorem" icon="material-symbols:library-add-check" link="#"
        :labels="['Vuejs', 'Tailwind', 'Typescript']" />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        heading="Project Ipsum" icon="material-symbols:http-rounded" link="#" :labels="['Bun', 'ElysiaJS', 'Qwik']" />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        heading="Project Dolor" icon="material-symbols:library-add-check" link="#"
        :labels="['Vite', 'Stripe', 'Laravel']" />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        heading="Project Lorem" icon="material-symbols:library-add-check" link="#"
        :labels="['Vuejs', 'Tailwind', 'Typescript']" />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        heading="Project Ipsum" icon="material-symbols:http-rounded" link="#" :labels="['Bun', 'ElysiaJS', 'Qwik']" />
    </div>
    <hr class="mt-5 mb-16 border-slate-300 dark:border-slate-800 duration-300 w-full" />
  </div>
  <div id="projects" class="flex h-auto w-full flex-col items-center text-4xl">
    <NavLink href="#contact" content="contact" />
    <div class="w-full flex gap-3">
      <div class="w-full h-[40vh] bg-slate-800 text-2xl py-8 flex flex-col items-center rounded-lg">
        <NavLink href="#about" content="about me" />
        <div class="text-lg px-10 text-justify"> Hello! I'm Alejandro (Alex) Laguna. I am currently studying
          Computing and Networking at <a class="underline italic" href="https://cendrassos.net">INS Cendrassos.</a>
          <br><br>
          I am also teaching myself how to program, and while it is quite a hard journey, I happen to enjoy this
          difficulty.

          <br><br>
          <h5 class="font-bold w-full text-center"> <Icon name="mdi:gmail" class="text-2xl"/> alejandro@alejandrolaguna.dev</h5>
          <h5 class="font-bold w-full text-center"> <Icon name="mdi:github-box" class="text-2xl"/> alexlp2 </h5>
        </div>
      </div>
      <form class="w-full h-[40vh] bg-red-200">

      </form>
    </div>
  </div>
</template>
