<script setup>
import { ref, computed, onBeforeMount, onUpdated, onMounted } from 'vue';
import Prompt from './Prompt.vue'
import { useRoute } from "vue-router";
import router from '../router';
import { useQuestionsStore } from "../stores/questionsStore";
import axios from "axios";

onMounted(() => {
})

const route = useRoute();
const store = useQuestionsStore();
store.fetchForm(route.params.id);
console.log(store);
var completion = ref(0)
var currentView = ref(0);
var isAnswered = ref(false)

async function changeCompletion() {
  completion.value = await Math.round((currentView.value + 1) / store.form.questions.length * 100)
}

function goBack() {
  currentView.value--;
  changeCompletion()
}

function goNext() {
  if (isAnswered) {
    if (currentView.value < store.form.questions.length - 1) {
      currentView.value++;
      changeCompletion()
      isAnswered.value = false
    }
  }
}

async function submit() {
  router.push({ path: `/form/result/${route.params.id}` });
}
</script>

<template>
  <section class="max-w-screen-lg mx-auto py-4 my-8 px-4 ">
    <div class="pb-4">
      <h1 class="mb-2 text-[1.75rem] sm:text-[2rem] leading-[1.6875rem] sm:leading-[2.25rem] font-semibold">{{
        store.form.title }}</h1>
      <h2 class=" mb-2 text-[1rem] sm:text-[1rem] leading-[1.6875rem] ">{{
        store.form.subtitle }}</h2>
    </div>

    <div class="lg:w-1/2 mx-auto my-5 bg-gray-200 rounded-full bg-gray-700">
      <div class="bg-primaryDark text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        :style="{ width: completion + '%' }"> {{ completion }}%</div>
    </div>


    <div class=" ">
      <section class="">
        <div class="shadow border rounded-2xl  px-4 py-8 mb-4 bg-[#eee]">
          <div class="mb-8">
            <label for="message" class=""></label>
            <p class=" text-[1.15rem] sm:text-[1.35rem] leading-[1.6875rem] font-semibold  ">
              {{ store.form.questions[currentView].question }}
            </p>
          </div>

          <Prompt @emptied="isAnswered = false" @answered="isAnswered = true" :key="currentView"
            :question=store.form.questions[currentView] :viewId="currentView" />

        </div>

        <div class=" w-fit ml-auto flex gap-1">
          <button v-if="currentView > 0" @click="goBack()" class="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
            <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>

            Prev
          </button>
          <button :disabled="isAnswered == false" v-if="currentView < store.form.questions.length - 1" @click="goNext()"
            class="flex items-center bg-[#CF2528] text-white px-4 py-2 rounded-lg">
            Next
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
          <button v-if="(currentView == store.form.questions.length - 1)" @click="submit()"
            class="flex items-center bg-[#CF2528] text-white px-4 py-2 rounded-lg">Submit</button>

        </div>



      </section>

    </div>

  </section>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
