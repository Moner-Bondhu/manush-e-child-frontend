<script setup>
import { ref, computed, onBeforeMount, onUpdated, onMounted } from 'vue';
import Prompt from './Prompt.vue'
import {useRoute} from "vue-router";
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

async function changeCompletion(){
  completion.value = await Math.round((currentView.value + 1) / store.form.questions.length * 100)
}

function goBack() {
      currentView.value--;
      changeCompletion()
}

function goNext() {
  if(isAnswered){
    if(currentView.value < store.form.questions.length - 1){
      currentView.value++;
      changeCompletion()
      isAnswered.value = false
    }
  }
}

async function submit(){
  router.push({ path: `/form/result/${route.params.id}` });
}
</script>

<template>
    <section class="max-w-screen-xl rounded-lg mx-auto sm:w-5/6 my-10 pb-2 bg-bgDark">
        <h1 class="bg-primaryDark rounded-t-lg text-2xl p-2 text-white">{{ store.form.title }}</h1>
        <h2 class="bg-primary text-xl p-2 text-white">{{ store.form.subtitle }}</h2>

        <div class="p-3">
            <section class="my-12">
                <div class="xl:w-3/4 mx-auto mb-10">
                    <label for="message" class="block my-2 text-sm font-medium text-gray-900">Question : </label>
                    <p>
                      {{ store.form.questions[currentView].question }}
                    </p>
                </div>

                  <Prompt @emptied="isAnswered = false" @answered="isAnswered = true" :key="currentView" :question=store.form.questions[currentView] :viewId="currentView" />

                <div class="xl:w-3/4 mx-auto">
                    <button v-if="currentView>0" @click="goBack()" class="text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-12 py-2.5 text-center mr-2 mb-2 my-2">Previous</button>
                    <button :disabled="isAnswered == false" v-if="currentView<store.form.questions.length - 1" @click="goNext()" class="text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-12 py-2.5 text-center mr-2 mb-2 my-2 disabled:opacity-25">Next</button>
                    <button v-if="(currentView == store.form.questions.length - 1)" @click="submit()" class="text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-12 py-2.5 text-center mr-2 mb-2 my-2">Submit</button>

                  </div>
    
                
                <div class="lg:w-1/2 mx-auto my-5 bg-gray-200 rounded-full bg-gray-700">
                    <div class="bg-primaryDark text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{ width: completion + '%'}"> {{ completion }}%</div>
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
