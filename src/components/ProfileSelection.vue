<script>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="grid card sm:grid-cols-2 container mx-auto my-8 text-center gap-8 w-[90%]">
        <RouterLink :to="`/child/initiate`">
            <div class="">
                <div class="rounded-lg hover:bg-gray-800 hover:text-white ease-in duration-100">
                    <div class="py-2">
                        <img src="https://monerbondhu-vs.s3.ap-southeast-1.amazonaws.com/monerbondhu-files/content/games/images/_bb8fcece-3ef5-4da5-91e8-b7ebc5a75ec8.jpeg"
                            alt="" class="w-[50%] mx-auto">
                    </div>
                    <h2 class="text-2xl  rounded-t-lg py-2">Login as child</h2>
                    <p class="py-4">Login as a child and add data to a child profile</p>
                </div>
            </div>
        </RouterLink>
        <RouterLink :to="`admin`">
            <div class="">
                <div class="rounded-lg hover:bg-gray-800 hover:text-white ease-in duration-100">
                    <div class="py-2">
                        <img src="https://monerbondhu-vs.s3.ap-southeast-1.amazonaws.com/monerbondhu-files/content/games/images/_eabc442d-be0f-4930-a3e3-594811779dc5.jpeg"
                            alt="" class="w-[50%] mx-auto">
                    </div>
                    <h2 class="text-2xl  rounded-t-lg py-2">Login as Admin</h2>
                    <p class="py-4">Login as an administrator and generate reports</p>
                </div>
            </div>
        </RouterLink>

    </div>

</template>

<style scoped>
.card {
    background-color: aliceblue;
}
</style>
