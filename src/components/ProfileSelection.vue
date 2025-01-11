<script>
import { RouterLink } from 'vue-router';
{/* <h4 class="mb-2 text-[1rem] sm:text-[1.25rem] leading-[1.6875rem] sm:leading-[2.25rem] font-semibold">
                        Find a matching counselor!<spanc class="text-red-500">*</spanc>
                    </h4>
                    <p class="mb-3 text-[1rem] sm:text-[1.25rem]  leading-[1.6875rem] sm:leading-[2.25rem]">
                        Answer a few questions, and we'll connect you with the best counselor for your needs
                    </p> */}

</script>

<template>
    <h1 class="text-2xl py-4 text-center">Who is using <b>Manush E</b> </h1>

    <div class="grid md:grid-cols-3 container mx-auto my-8 text-center gap-8 w-[70%]">
        <RouterLink :to="`/child/initiate`">
            <div class="shadow rounded-2xl">
                <div class="rounded-lg hover:border hover:border-[#f2684e] ease-in duration-100 grid grid-cols-1">
                    <div class="py-2 col-span-1">
                        <img src="https://i.imghippo.com/files/DLs7447MBk.png" alt="" class="w-[100px] mx-auto px-4">
                    </div>
                    <div class="col-span-3  px-4 my-auto">
                        <h2
                            class="text-[1rem] sm:text-[1.25rem]  leading-[1.6875rem] sm:leading-[2.25rem] font-semibold">
                            Login as a <span class="text-red-500">Child</span> </h2>
                        <p class="text-[1rem] sm:text-[1rem]  leading-[1.6875rem] pb-4">Login as a
                            child and add data to a child profile</p>
                    </div>

                </div>
            </div>
        </RouterLink>
        <RouterLink :to="`admin`">
            <div class="shadow rounded-2xl">
                <div class="rounded-lg hover:border hover:border-[#f2684e] ease-in duration-100 grid grid-cols-1">
                    <div class="py-2 col-span-1">
                        <img src="https://i.imghippo.com/files/lSr3999Zy.png" alt="" class="w-[100px] mx-auto px-4">
                    </div>
                    <div class="col-span-3  px-4 my-auto">
                        <h2
                            class="text-[1rem] sm:text-[1.25rem]  leading-[1.6875rem] sm:leading-[2.25rem] font-semibold">
                            Login as a <span class="text-red-500">Parent</span></h2>
                        <p class="text-[1rem] sm:text-[1rem]  leading-[1.6875rem] pb-4">Login as an administrator and
                            generate reports</p>
                    </div>

                </div>
            </div>
        </RouterLink>
        <RouterLink :to="``">
            <div class="shadow rounded-2xl">
                <div class="rounded-lg hover:border hover:border-[#f2684e]  ease-in duration-100 grid grid-cols-1">
                    <div class="py-2 col-span-1">
                        <img src="https://i.imghippo.com/files/fVp8495lag.png" alt="" class="w-[100px] mx-auto px-4">
                    </div>
                    <div class="col-span-3  px-4 my-auto">
                        <h2
                            class="text-[1rem] sm:text-[1.25rem]  leading-[1.6875rem] sm:leading-[2.25rem] font-semibold">
                            Login as an <span class="text-red-500">Admin</span></h2>
                        <p class="text-[1rem] sm:text-[1rem]  leading-[1.6875rem] pb-4">Login as an administrator and
                            generate reports</p>
                    </div>

                </div>
            </div>
        </RouterLink>

    </div>

</template>

<style scoped></style>
