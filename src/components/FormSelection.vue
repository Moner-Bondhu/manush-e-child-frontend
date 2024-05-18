<script>
    import axios from "axios";
    export default {
        data(){
            return {
                forms: []
            }
        },
        mounted(){
            if(!localStorage.getItem('child_id')){
                this.$router.push({ path: `/child/initiate` });
            } else {
                axios({ method: "GET", "url": `${import.meta.env.VITE_BACKEND_URL}/api/forms` }).then(result => {
                    console.log(result);
                    this.forms = result.data.data;
                }, error => {
                    console.error(error);
                });
            }
        },
    }

</script>

<template>
    <div class="grid card sm:grid-cols-2 container mx-auto my-8 text-center gap-8 w-[90%]">
        <div class="" v-for="form in forms" :key="form">
            <div class="rounded-lg shadow hover:bg-[#f2684e] hover:text-white ease-in duration-100 ">
                <RouterLink :to="`/form/${form.id}`" class="grid grid-cols-4">
                    <div class="py-2 col-span-1">
                        <img :src="form.thumbnail" alt="" class="w-[100%] mx-auto">
                    </div>
                    <div class="col-span-3 text-left p-4 my-auto">
                        <h2 class="text-2xl  rounded-t-lg font-semibold">{{ form.title }}</h2>
                        <p class="py-4">{{ form.description }}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
    

</template>

<style scoped>

/* .card{
    background-color: aliceblue;
} */

</style>
