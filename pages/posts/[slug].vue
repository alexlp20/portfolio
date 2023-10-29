<script setup>
import NavBar from '../components/NavBar.vue';

const isLoading = ref(true);
const post = ref([]);


function formatDateString(inputDate) {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

async function getPost(id) {
    try {
        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();
        post.value = data;
    } catch (error) {
        console.error("Error:", error);
    } finally {
        isLoading.value = false;
    }
}

onMounted(() => {
    const route = useRoute();
    const post = reactive(getPost(route.params.slug));
});

</script>

<template>
    <div class="flex items-center justify-center flex-col w-screen overflow-x-hidden px-2 xl:px-[10%] h-auto">
        <NavBar />
        <div class="w-[90%] lg:w-2/3 mx-auto pt-[15vh]" v-if="post.title">
            <main class="mt-3 md:mt-10">
                <div class="mb-4 md:mb-0 w-full mx-auto relative">
                    <div class="px-4 lg:px-0">
                        <h2 class="text-2xl lg:text-4xl font-semibold text-violet-300 leading-tight flex-col md:flex-row flex w-full justify-between">
                            {{ post.title }}
                            <span class="text-violet-200 opacity-75 text-sm md:text-base">{{formatDateString(post.publish_date)}}</span>
                        </h2>
                        <p class="py-2 text-violet-500 inline-flex text-sm md:text-base items-center justify-center mb-2">
                            {{ post.tag }}
                        </p>
                    </div>


                    <img v-if="post.img" :src="post.img" class="w-full object-cover rounded-md max-h-[20em]" />
                </div>

                <div class="flex flex-col lg:flex-row lg:space-x-12">
                    <div class="px-4 lg:px-0 mt-12 text-violet-100 text-base md:text-lg w-full">
                        <span v-html="post.content"></span>
                    </div>
                </div>
            </main>
        </div>
        <div v-else class="w-screen h-screen flex-col flex items-center gap-5 justify-center text-3xl font-bold text-violet-200"> 
            <span> still looking for that blog post... </span>
            <a href="/" class="underline"> wanna go back? </a>
        </div>
    </div>
</template>
