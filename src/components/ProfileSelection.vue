<script>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="grid md:grid-cols-2 container mx-auto my-8 text-center gap-8 w-[90%]">
        <RouterLink :to="`/child/initiate`">
            <div class="shadow rounded-2xl">
                <div class="rounded-lg hover:bg-[#f2684e] hover:text-white ease-in duration-100 grid grid-cols-4">
                    <div class="py-2 col-span-1">
                        <img src="https://monerbondhu-vs.s3.ap-southeast-1.amazonaws.com/monerbondhu-files/content/games/images/_bb8fcece-3ef5-4da5-91e8-b7ebc5a75ec8.jpeg"
                            alt="" class="w-[100%] mx-auto">
                    </div>
                    <div class="col-span-3 text-left p-4 my-auto">
                        <h2 class="text-2xl  rounded-t-lg font-semibold">Login as child</h2>
                        <p class="py-4">Login as a child and add data to a child profile</p>
                    </div>

                </div>
            </div>
        </RouterLink>
        <RouterLink :to="`admin`">
            <div class="shadow rounded-2xl">
                <div class="rounded-lg hover:bg-[#f2684e] hover:text-white ease-in duration-100 grid grid-cols-4">
                    <div class="py-2 col-span-1">
                        <img src="https://monerbondhu-vs.s3.ap-southeast-1.amazonaws.com/monerbondhu-files/content/games/images/_eabc442d-be0f-4930-a3e3-594811779dc5.jpeg"
                            alt="" class="w-[100%] mx-auto">
                    </div>
                    <div class="col-span-3 text-left p-4 my-auto">
                        <h2 class="text-2xl  rounded-t-lg font-semibold">Login as Admin</h2>
                        <p class="py-4">Login as an administrator and generate reports</p>
                    </div>

                </div>
            </div>
        </RouterLink>
        <RouterLink :to="``">
            <div class="shadow rounded-2xl">
                <div class="rounded-lg hover:bg-[#f2684e] hover:text-white ease-in duration-100 grid grid-cols-4">
                    <div class="py-2 col-span-1">
                        <img src="https://monerbondhu-vs.s3.ap-southeast-1.amazonaws.com/monerbondhu-files/content/games/images/_eabc442d-be0f-4930-a3e3-594811779dc5.jpeg"
                            alt="" class="w-[100%] mx-auto">
                    </div>
                    <div class="col-span-3 text-left p-4 my-auto">
                        <h2 class="text-2xl  rounded-t-lg font-semibold">Login as Parent</h2>
                        <p class="py-4">Login as an administrator and generate reports</p>
                    </div>

                </div>
            </div>
        </RouterLink>

    </div>

</template>

<style scoped>

</style>
