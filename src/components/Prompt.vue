<script setup>
import FreeText from './FreeText.vue'
import MultipleChoice from './MultipleChoice.vue';
import { useQuestionsStore } from '../stores/questionsStore'
import { onMounted } from 'vue';

const props = defineProps(['question', 'viewId'])
const emit = defineEmits(['answered', 'emptied'])

const store = useQuestionsStore();

function handleChange(value) {
  console.log("Emitted");
  store.form.questions[props.viewId].answer = value
  if(value){
    console.log(store.form.questions[props.viewId].answer)
    emit('answered')
  } else {
    emit('emptied')
  }
}

onMounted(() => {
  if(store.form.questions[props.viewId].answer){
    emit('answered')
  }
})
</script>

<template>

               
<div class="xl:w-3/4 mx-auto my-2 ANSWER">
        <component @updateAnswer="handleChange" :is="question.type" :answer="store.form.questions[viewId].answer" :question="store.form.questions[viewId]"></component>
</div>
                
</template>

<style>

</style>