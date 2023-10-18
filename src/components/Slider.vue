<script setup>
import { ref } from 'vue'

const props = defineProps(['answer', 'question'])
const emit = defineEmits(['updateAnswer'])
</script>

<template>
    
    <div class="w-[95%] sm:w-3/4 mx-auto my-2 ANSWER">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Answer : </label>
                   <!--  <div class="flex items-center gap-8 py-2">
                        <span>Disagree</span>
                        <input id="steps-range" type="range" min="0" max="5" value="1" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-700">
                        <span>Agree</span>
                    </div> -->
                    <!-- <div class="py-2">
                        <div class="grid grid-cols-5 text-sm">
                            <span>Strongly Disagree</span>
                            <span class="text-center">Disagree</span>
                            <span class="text-center">Neutral</span>
                            <span class="text-center">Agree</span>
                            <span class="text-right">Strongly Agree</span>
                        </div>
                        <input id="steps-range" type="range" min="1" max="5" value="1" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-700">
                    </div> -->
                    <div class="py-2">
                        <!-- <div class="grid grid-cols-5 text-sm">
                            <span>Strongly Disagree</span>
                            <span class="text-center">Disagree</span>
                            <span class="text-center">Neutral</span>
                            <span class="text-center">Agree</span>
                            <span class="text-right">Strongly Agree</span>
                        </div> -->
                        <input @input="$emit('updateAnswer', $event.target.value)" id="steps-range" list="" type="range" min="0" max="4" :value=answer step="1" 
                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-700">
                        <datalist id="number">
                            <option v-for="choice in question.choices" :key="choice.value" :value="choice.value">{{ choice.text }}</option>
                        </datalist>
                    </div>
                </div>

</template>

<style scoped>

</style>