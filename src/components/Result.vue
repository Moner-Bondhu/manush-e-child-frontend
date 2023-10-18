<script>
    import axios from "axios";
    import { ref } from "vue";
    import { useQuestionsStore } from "../stores/questionsStore";
    import { mapStores } from 'pinia'
    import {useRoute} from "vue-router";
    export default {
        props: ['form_id'],
        computed: {
            // note we are not passing an array, just one store after the other
            // each store will be accessible as its id + 'Store'
            ...mapStores(useQuestionsStore)
        },
        data() {
            return {
                gameResult: ref({})
            }
        },
        mounted() {
            axios.get('https://api.ipify.org?format=json')
                .then(response => {
                    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/form/result`, {
                        ip: response.data.ip,
                        form_id: this.$route.params.id,
                        store: this.questionsStore.form.questions,
                        child_id: this.questionsStore.child_id
                    }).then(result => {
                        this.gameResult = result.data.data;
                    }, error => {
                        console.error(error);
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
</script>

<template>
    <div class="xl:w-3/4 mx-auto my-2 ANSWER">
        <div class="row">
            <div class="col">
                <h2 class="text-center text-4xl font-semibold my-2">Your response has been recorded!</h2>
            </div>
        </div>
        <p class="text-center my-2 text-xl">The response has been recorded! <a href="/modules">Record again!</a> </p>
</div>
                
</template>

<style>

</style>