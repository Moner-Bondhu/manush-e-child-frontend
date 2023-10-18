<script setup>
import { ref } from 'vue'

const props = defineProps(['answer'])
const emit = defineEmits(['updateAnswer'])
</script>

<template>
    
<label for="message" class="block mb-2 text-sm font-medium text-gray-900">Answer : </label>
<textarea @input="$emit('updateAnswer', $event.target.value)" id="message" rows="4" class="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here...">{{ answer }}</textarea>

</template>

<style scoped>

</style>