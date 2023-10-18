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
    <div class="" v-for="form in forms" :key="form" >
                    <div class="rounded-lg hover:bg-gray-800 hover:text-white ease-in duration-100">
                        <RouterLink :to="`/form/${form.id}`">
                            <div class="py-2">
                                <img :src="form.thumbnail" alt="" class="w-[50%] mx-auto">
                            </div>
                            <h2 class="text-2xl  rounded-t-lg py-2">{{ form.title }}</h2>
                            <p class="py-4">{{ form.description }}</p>
                        </RouterLink>
                    </div>
    </div>
</div>    
  
</template>

<style scoped>

.card{
    background-color: aliceblue;
}

</style>
