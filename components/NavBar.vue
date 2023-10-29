

<template>
    <div>
        <!-- Button to toggle the navbar on small screens -->
        <button @click="toggleNav"
            class="block md:hidden fixed z-50 left-4 top-4 backdrop-blur-md rounded-md border-white border-opacity-10 ">
            <Icon name="iconamoon:menu-burger-horizontal-bold" class="text-xl text-violet-200" />
        </button>

        <div class="w-auto md:hidden flex-col items-center md:flex-row gap-1 md:gap-4 xl:gap-8 py-4 px-2 md:px-4 z-50 lg:px-8 backdrop-blur-sm border-[1px] rounded-xl border-white border-opacity-10 fixed top-12 left-4"
            :class="isNavOpen ? 'flex' : 'hidden'">
            <!-- Navigation links -->
            <NuxtLink to="/" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">home
            </NuxtLink>
            <NuxtLink to="/#about" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">
                about</NuxtLink>
            <NuxtLink to="/#projects" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">
                projects</NuxtLink>
            <NuxtLink to="/#blog" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">blog
            </NuxtLink>
            <NuxtLink to="/#experience"
                class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">experience</NuxtLink>
            <NuxtLink to="/#contact" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">
                contact</NuxtLink>
        </div>
    </div>
    <div
        class="hidden md:flex w-auto gap-1 md:gap-4 xl:gap-8 py-4 px-2 md:px-4 z-50 lg:px-8 backdrop-blur-sm border-[1px] rounded-xl border-white border-opacity-10 fixed top-5">
        <NuxtLink to="/" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">home
        </NuxtLink>
        <NuxtLink to="/#about" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">about
        </NuxtLink>
        <NuxtLink to="/#projects" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">
            projects</NuxtLink>
        <NuxtLink to="/#blog" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">blog
        </NuxtLink>
        <NuxtLink to="/#experience" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">
            experience</NuxtLink>
        <NuxtLink to="/#contact" class="text-violet-200 duration-300 hover:text-white text-base xl:text-xl font-bold">
            contact</NuxtLink>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isNavOpen = ref(false); // Initially the nav is closed

function toggleNav() {
    isNavOpen.value = !isNavOpen.value;
}
</script>
