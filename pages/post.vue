<script setup>
import NavBar from '../components/NavBar.vue';

const isLoading = ref(true);
const posts = ref([]);

async function getPosts() {
    try {
        const res = await fetch('/api/get-posts');
        const data = await res.json();
        posts.value = data;
    } catch (error) {
        console.error("Error:", error);
    } finally {
        isLoading.value = false;
    }
}

onMounted(async () => {
    const route = reactive(useRoute());

    const posts = await getPosts();
    const hash = window.location.hash;
    console.log(route)
    const hashWithoutSymbol = hash.substring(1);
});

</script>

<template>
    <div class="flex items-center justify-center flex-col w-screen overflow-x-hidden px-2 xl:px-[10%] h-auto">
        <NavBar />
        <div v-for="(post, index) in posts" class="w-2/3 mx-auto pt-[15vh]"
            :class="post.url_id == hash ? 'block' : 'hidden'">
            <main class="mt-10">
                <div class="mb-4 md:mb-0 w-full mx-auto relative">
                    <div class="px-4 lg:px-0">
                        <h2 class="text-4xl font-semibold text-violet-300 leading-tight">
                            {{ post.title }}
                        </h2>
                        <p class="py-2 text-violet-500 inline-flex items-center justify-center mb-2">
                            {{ post.tag }}
                        </p>
                    </div>


                    <img v-if="post.img" :src="post.img" class="w-full object-cover lg:rounded" style="height: 28em;" />
                </div>

                <div class="flex flex-col lg:flex-row lg:space-x-12">
                    <div class="px-4 lg:px-0 mt-12 text-violet-100 text-lg w-full">
                        <span v-html="post.content"></span>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
