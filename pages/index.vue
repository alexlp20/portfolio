<script setup>
import NavBar from '../components/NavBar.vue';
const name = ref('');
const subject = ref('');
const content = ref('');

async function sendEmail() {
    const submit = async () => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: JSON.stringify(
                    { name: name.value, subject: subject.value, content: content.value }
                ),
            });


            if (response.ok) { // Check if the response status is 200 (OK)
                name.value = '';
                subject.value = '';
                content.value = '';
                return true;
            } else {
                alert('Email could not be sent. Status: ' + response.status.toString());
            }
        } catch (error) {
            // Handle any network or other errors.
            console.error(error);
        }
    };
    submit();
}

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

function formatDateString(inputDate) {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

onMounted(async () => {
  const posts = await getPosts();
})
</script>
<template>
    <div class="flex items-center justify-center flex-col w-screen overflow-x-hidden px-2 xl:px-[10%] h-auto">
        <NavBar />
        <div class="w-full h-screen flex items-center justify-center">
            <div class="w-full lg:w-3/5 flex items-center justify-center flex-col gap-4">
                <h1 class="text-4xl lg:text-7xl text-violet-100 text-center font-bold">alejandro laguna.</h1>
                <h3 class="text-2xl lg:text-3xl text-violet-300 font-semibold"> i tinker around with code </h3>
                <NuxtLink to="#contact"
                    class="mt-4 bg-transparent border-[1px] border-white border-opacity-10 text-violet-100 duration-150 hover:bg-white hover:bg-opacity-10 p-0 lg:p-3 text-xl font-semibold rounded-lg flex items-center justify-center ">
                    <button class="ml-3">reach out!
                        <Icon name="ic:round-arrow-drop-down" size="2em" />
                    </button>
                </NuxtLink>
            </div>
        </div>
        <div class="w-full h-auto min-h-screen flex items-center justify-center flex-col pt-[15vh]" id="about">
            <div class="bg-transparent w-full xl:w-3/5">
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div class="col-span-12 lg:col-span-5">
                            <div class="border-[1px] border-white border-opacity-10 rounded-lg p-6">
                                <div class="flex flex-col items-center">
                                    <img src="/photo.jpg" class="w-32 h-32 rounded-full mb-4 shrink-0" />

                                    <h1 class="text-xl font-bold text-white">alejandro laguna</h1>
                                    <p class="text-violet-50 opacity-50">programmer</p>
                                    <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="#contact"
                                            class="bg-violet-500 hover:bg-violet-700 duration-150 text-violet-100 font-semibold px-2 py-1 lg:py-2 lg:px-4 rounded-lg">contact</a>
                                        <a href="https://drive.google.com/file/d/1tGY5RpdVl54qfoDXXL-2LgjW7WG70sYv/view?usp=sharing"
                                            class="border-[1px] hover:bg-white hover:bg-opacity-10 border-white border-opacity-10 text-violet-100 font-semibold px-2 py-1 lg:py-2 lg:px-4 rounded-lg">résumé</a>
                                    </div>
                                </div>
                                <hr class="my-6 border-t border-gray-300">
                                <div class="flex flex-col">
                                    <span class="text-violet-200 text-lg font-bold tracking-wider mb-2">favorite tech</span>
                                    <ul class="text-violet-100 text-base font-semibold">
                                        <li class="mb-2">
                                            <Icon class="mr-2" name="nonicons:vue-16" /> vue.js
                                        </li>
                                        <li class="mb-2">
                                            <Icon class="mr-2" name="mdi:laravel" /> laravel
                                        </li>
                                        <li class="mb-2">
                                            <Icon class="mr-2" name="simple-icons:tailwindcss" /> tailwindcss
                                        </li>
                                        <li class="mb-2">
                                            <Icon class="mr-2" name="akar-icons:typescript-fill" /> typescript
                                        </li>
                                        <li class="mb-2">
                                            <Icon class="mr-2" name="uil:linux" /> linux
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-7">
                            <div class="border-[1px] border-white border-opacity-10 rounded-lg p-6">
                                <h2 class="text-xl font-bold mb-4 text-violet-100">About Me</h2>
                                <p class="text-violet-200">I'm a coder who really loves books, and I enjoy
                                    doing
                                    some writing as a hobby too. When I'm not coding, you'll often see me sitting in a comfy
                                    spot with a book or
                                    working on my own creative stuff. I like how these two things, one all about thinking
                                    logically and the other
                                    about using my imagination, fit together in my everyday life.
                                </p>

                                <h3 class="font-semibold text-center mt-3 -mb-2">
                                    Find me on
                                </h3>
                                <div class="flex justify-center items-center gap-6 my-6">

                                    <a class="text-violet-300 hover:text-violet-100 duration-300 text-4xl" href="https://www.linkedin.com/in/alejandro-laguna-939687278/"
                                        target="_blank">
                                        <Icon name="mdi:linkedin" />
                                    </a>
                                    <a class="text-violet-300 hover:text-violet-100 duration-300 text-4xl" href="https://github.com/alexlp20"
                                        target="_blank">
                                        <Icon name="jam:github" />
                                    </a>
                                </div>


                                <h2 class="text-xl font-bold mt-6 mb-4 text-violet-100">Studies / Courses</h2>
                                <div class="mb-6">
                                    <div class="flex justify-between lg:flex-row flex-col">
                                        <span class="text-violet-200 font-bold">OSS University</span>
                                        <p>
                                            <span class="text-violet-200">Oct 2023 - ONGOING</span>
                                            <span class="text-violet-200 ml-4">Online</span>
                                        </p>
                                    </div>
                                    <p class="mt-2 text-violet-100 text-justify">I'm currently pursuing the OSSU (Open
                                        Source Society
                                        University) program, which offers a comprehensive computer science education. I'm in
                                        the process of studying various topics such as algorithms, data structures,
                                        programming languages, web development, and more. OSSU's emphasis on self-guided
                                        learning allows me to progress at my own pace, and the wealth of high-quality
                                        materials and a supportive community make it an accessible resource for learners
                                        worldwide.
                                    </p>
                                </div>
                                <div class="mb-6">
                                    <div class="flex justify-between lg:flex-row flex-col">
                                        <span class="text-violet-200 font-bold">Harvard's CS50</span>
                                        <p>
                                            <span class="text-violet-200">Sept 2023 - Nov 2023</span>
                                            <span class="text-violet-200 ml-4">Online</span>
                                        </p>
                                    </div>
                                    <p class="mt-2 text-violet-100 text-justify">Harvard CS50 is a renowned introductory
                                        computer science
                                        course. I've gained skills in algorithms, data structures, C, Python, SQL, web
                                        development, and cybersecurity. The course has strongly emphasized problem-solving
                                        and logical thinking. Practical projects were a central focus, allowing me to apply
                                        my knowledge.
                                    </p>
                                </div>
                                <div class="mb-6">
                                    <div class="flex justify-between lg:flex-row flex-col">
                                        <span class="text-violet-200 font-bold">IT Technician.</span>
                                        <p>
                                            <span class="text-violet-200">2022 - 2024</span>
                                            <span class="text-violet-200 ml-4">INS Cendrassos</span>

                                        </p>
                                    </div>
                                    <p class="mt-2 text-violet-100 text-justify">After completing the Intermediate Level
                                        Vocational
                                        Training in
                                        Microcomputer Systems and Networks, I'm well-prepared for a career in IT. Over two
                                        years, I learned to assemble computers, install operating systems, and manage
                                        networks. This program gave me practical skills in system maintenance and network
                                        administration. I can now work as an IT technician and have the option to further my
                                        education in the IT field.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-auto min-h-screen flex gap-6 items-center justify-center flex-col pt-[15vh]" id="projects">
            <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-center text-gray-900 dark:text-white">my
                projects
            </h2>


            <div class="w-11/12 lg:max-w-[40vw] p-2 border border-white border-opacity-10 rounded-lg shadow">
                <a href="#">
                    <img class="rounded-t-lg" src="/academify.png" alt="" />
                </a>
                <div class="p-5">
                    <h5>
                        <h5 class="mb-2 text-2xl text-violet-100 font-bold">Academify, e-learning multitenant platform</h5>
                    </h5>
                    <p class="mb-3 font-normal text-violet-200">Discover Academify, my ongoing project where I'm learning
                        Laravel and the multitenant concept. It's a handy tool for crafting online courses, managing
                        content, and creating quizzes. Think of it as my ongoing experiment in online teaching and learning
                        while I tinker with Laravel and multitenancy.</p>
                    <a href="https://github.com/alexlp20/academify"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center tbg-transparent border-[1px] border-white border-opacity-10 text-violet-100 duration-150 hover:bg-white hover:bg-opacity-10 rounded-lg">
                        read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>


            <div class="w-11/12 lg:max-w-[40vw] p-2 border border-white border-opacity-10 rounded-lg shadow">
                <a href="#" class="w-full flex justify-center">
                    <img class="rounded-t-lg" src="/todo-cli.png" alt="" />
                </a>
                <div class="p-5">
                    <h5 href="#">
                        <h5 class="mb-2 text-2xl text-violet-100 font-bold">Toaster, a CLI Task Organizer
                            technology acquisitions 2021</h5>
                        </h5>
                    <p class="mb-3 font-normal text-violet-200">Meet TOASTER, my continuously evolving CLI project. TOASTER,
                        which stands for "Task Organizer: A Superb Tool for Enhanced Reminders," is my ongoing C programming
                        endeavor. It's built to simplify task management and scheduling. </p>
                    <a href="https://github.com/alexlp20/toaster"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-transparent border-[1px] border-white border-opacity-10 text-violet-100 duration-150 hover:bg-white hover:bg-opacity-10 rounded-lg">
                        read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>


        </div>

        <div class="w-full h-auto min-h-screen flex gap-6 items-center justify-center flex-col pt-[15vh]" id="experience">
            <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                experience
            </h2>


            <div class="w-11/12 lg:max-w-[40vw] p-2 border border-white border-opacity-10 rounded-lg shadow">
                <ol class="relative border-l border-violet-400">
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-violet-300 rounded-full mt-1.5 -left-1.5">
                        </div>
                        <time class="mb-1 text-sm font-normal leading-none text-violet-300">September 2023
                            - Ongoing</time>
                        <h3 class="text-lg font-semibold text-white">Web Developer Trainee @ Alterego Web
                            [SPAIN]
                        </h3>
                        <p class="mb-4 text-base font-normal text-violet-100">I'm currently a WebDev
                            Trainee, and my job involves finding and fixing issues in a large, complex codebase. I'm
                            also responsible for adding new features to the application, using Laravel and various packages.
                            Most of my work
                            revolves around multitenant applications. While the code I work with isn't the cleanest, I'm
                            gaining experience
                            in debugging and problem-solving. I'm also learning how to maintain and improve the codebase for
                            better
                            performance and scalability.</p>
                        <a href="http://www.alteregoweb.com/"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium bg-transparent border-[1px] border-white border-opacity-10 text-violet-100 duration-150 hover:bg-white hover:bg-opacity-10 rounded-lg">
                            check their website
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-violet-300 rounded-full mt-1.5 -left-1.5">
                        </div>
                        <time class="mb-1 text-sm font-normal leading-none text-violet-300">June
                            2023</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Web Developer Trainee @ Niblu Group
                            [SLOVENIA]</h3>
                        <p class="text-base font-normal text-violet-100">As part of my Erasmus scholarship
                            in Slovenia, I spent a month collaborating on an eLearning platform project with a freelancer.
                            We used Next.js, FastAPI, MongoDB, and AWS S3 for development. This experience expanded my
                            knowledge in modern web technologies and enhanced my skills in both front-end and back-end
                            development.
                        </p>
                    </li>
                </ol>
            </div>
        </div>

        <div class="w-full h-auto min-h-screen flex items-center justify-center flex-col pt-[15vh]" id="blog">
            <section>
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2
                            class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                            Check
                            out my mostly non-sense thoughts
                        </h2>
                        <p class="mb-8 lg:mb-16 font-light text-center text-violet-200 opacity-70 sm:text-xl">I mean it, you
                            should not take (almost) any of what I type seriously. I just like
                            to write dumb stuff.</p>
                    </div>
                    <div class="grid gap-8 lg:grid-cols-2">
                        <article class="p-6 border border-white border-opacity-10 rounded-lg">
                            <div class="flex justify-between items-center mb-5 text-gray-500">
                                <span class="text-sm">14 days ago</span>
                            </div>
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How
                                    to quickly deploy a static website</a></h2>
                            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to
                                bootstrap lots of websites and are becoming the basis for a variety of tools that even
                                influence both web designers and developers influence both web designers and developers.</p>
                            <div class="flex justify-between items-center">
                                <a href="#" class="inline-flex items-center text-violet-300 hover:text-white">
                                    Read more
                                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
        <div class="w-full h-auto min-h-screen flex items-center justify-center flex-col pt-[15vh]" id="contact">
            <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-center text-gray-900 dark:text-white">contact
                me
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-violet-200 opacity-70 sm:text-xl">want to work on something
                together? curious about any of my projects? email me!</p>
            <form @submit.prevent="sendEmail" class="space-y-8 w-5/6 lg:w-3/5">
                <div>
                    <label for="name" class="block mb-2 text-lg font-semibold text-violet-100">Your name</label>
                    <input type="name" id="name"
                        class="shadow-sm border border-white border-opacity-10 bg-transparent text-base text-white rounded-lg block w-full p-2.5"
                        placeholder="Jane Doe" v-model="name" required>
                </div>
                <div>
                    <div>
                        <label for="subjec" class="block mb-2 text-lg font-semibold text-violet-100">Message's
                            Subject</label>
                        <input type="subject" id="subject"
                            class="shadow-sm border border-white border-opacity-10 bg-transparent text-base text-white rounded-lg block w-full p-2.5"
                            placeholder="Work together in some cool project!" v-model="subject" required>
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        your message</label>
                    <textarea id="content" rows="6"
                        class="shadow-sm border border-white border-opacity-10 bg-transparent text-base text-white rounded-lg block w-full p-2.5"
                        placeholder="Leave a message..." v-model="content"></textarea>
                </div>
                <button type="submit"
                    class="mt-4 bg-transparent border-[1px] rounded-xl border-white border-opacity-10 text-violet-100 duration-150 hover:bg-white hover:bg-opacity-10 p-3 text-lg font-semibold rounded-lg flex items-center justify-center ">Send
                    message</button>
            </form>
        </div>
    </div></template>
