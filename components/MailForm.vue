<script setup>
import { ref } from 'vue';

const userEmail = ref('');
const emailTitle = ref('');
const emailContent = ref('');

function submitMail() {
  const formData = {
    userEmail: userEmail.value,
    emailTitle: emailTitle.value,
    emailContent: emailContent.value,
  };
  console.log(formData);
}
</script>

<template>
  <form @submit.prevent="submitMail" class="w-full h-auto min-h-[40vh] flex flex-col items-stretch px-10 text-2xl py-8">
    <div class="w-full flex justify-center">
      <NavLink href="#about" content="send me an email" />
    </div>
    <div class="text-lg flex h-full flex-col  mt-4">
      <div class="mb-4">
        <label for="userEmail" class="block mb-2">Your Email</label>
        <input type="email" id="userEmail" v-model="userEmail" name="userEmail"
          class="w-full px-4 py-2 border rounded-md text-slate-800 focus:outline-none focus:border-slate-500">
      </div>
      <div class="mb-4">
        <label for="emailTitle" class="block mb-2">Email Title</label>
        <input type="text" id="emailTitle" v-model="emailTitle" name="emailTitle"
          class="w-full px-4 py-2 border rounded-md focus:outline-none text-slate-800 focus:border-slate-500">
      </div>
      <div class="mb-4">
        <label for="emailContent" class="block mb-2">Email Content</label>
        <textarea id="emailContent" v-model="emailContent" name="emailContent"
          class="w-full px-4 py-2 h-[30vh] border rounded-md focus:outline-none text-slate-800 focus:border-slate-500"></textarea>
      </div>
      <div class="text-center">
        <button type="submit"
          class="bg-slate-500 text-slate-200 px-4 py-2 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600">Submit</button>
      </div>
    </div>
  </form>
</template>

