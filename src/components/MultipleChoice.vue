<script setup>
const emit = defineEmits(['updateAnswer'])
const props = defineProps(['answer', 'question'])

</script>

<template>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Answer : </label>
                    
                <ul class="grid w-full gap-2 md:grid-cols-2">
                    
                    <li v-for="choice in question.choices" :key="choice.value">
                        <input @input="$emit('updateAnswer', $event.target.value)" type="radio" :id=choice.value name="hosting" :checked="answer == choice.value" :value=choice.value class="hidden peer" required>
                        <label :for=choice.value class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:text-primary peer-checked:border-primary peer-checked:text-primaryDark hover:text-gray-600 hover:bg-gray-100 text-gray-400 bg-gray-800 hover:bg-gray-700">                           
                            <div class="block">
                                <div class="w-full text-lg font-semibold">{{ choice.text }}</div>
                                <!-- <div class="w-full">extra info</div> -->
                            </div>
                        </label>
                    </li>
                </ul>
</template>