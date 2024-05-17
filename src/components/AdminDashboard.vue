<script>
import mw from '../assets/mental-health.png';
import sl from '../assets/moon.png';
import fh from '../assets/restaurant.png';


export default {
    data() {
        return {
            mentalWellbeing: mw,
            sleep: sl,
            foodHabit: fh,

        };
    }
}

</script>
<template>

    <section class="max-w-screen-lg mx-auto py-4 my-8 px-4">
        <div class="md:grid grid-cols-3 gap-4">
            <div class="rounded-2xl p-4 shadow">
                <div>

                    <div class="flex items-center gap-2 pb-2">
                        <img :src="mentalWellbeing" alt="" srcset="" class="w-[20px] h-[20px] block">
                        <h2 class="text-[.9rem] sm:text-[1rem]">Mental wellbeing
                        </h2>
                    </div>
                    <h1 class=" text-[1rem] sm:text-[1.15rem] py-1">Total Tracked: <span class="font-bold">140</span>
                        students
                    </h1>
                    <h1 class="text-[1.15rem] sm:text-[1.5rem] font-bold text-[red]">Intervention Needed: <span
                            class="font-bold">3</span>
                    </h1>

                    <a class="underline text-[.8rem] my-8" href="#mw">Click for more details</a>
                </div>
            </div>
            <div class="rounded-2xl p-4 shadow">
                <div>
                    <div class="flex items-center gap-2 pb-2">
                        <img :src="foodHabit" alt="" srcset="" class="w-[20px] h-[20px] block">
                        <h2 class="text-[.9rem] sm:text-[1rem]">Food Habits
                        </h2>
                    </div>

                    <h1 class=" text-[1rem] sm:text-[1.15rem] py-1">Total Tracked: <span class="font-bold">140</span>
                        students
                    </h1>
                    <h1 class="text-[1.15rem] sm:text-[1.5rem] font-bold text-[red]">Intervention Needed: <span
                            class="font-bold">3</span>
                    </h1>

                    <a class="underline text-[.8rem] my-8" href="#fh">Click for more details</a>
                </div>
            </div>
            <div class="rounded-2xl p-4 shadow ">
                <div>
                    <div class="flex items-center gap-2 pb-2">
                        <img :src="sleep" alt="" srcset="" class="w-[20px] h-[20px] block">
                        <h2 class="text-[.9rem] sm:text-[1rem]">Sleep
                        </h2>
                    </div>
                    <h1 class=" text-[1rem] sm:text-[1.15rem] py-1">Total Tracked: <span class="font-bold">140</span>
                        students
                    </h1>
                    <h1 class="text-[1.15rem] sm:text-[1.5rem] font-bold text-[green]">Intervention Needed: <span
                            class="font-bold">0</span>
                    </h1>

                    <a class="underline text-[.8rem] my-8" href="#sl">Click for more details</a>



                </div>
            </div>


        </div>

    </section>
    <section class="max-w-screen-lg mx-auto py-4 my-8 shadow rounded-2xl p-4" id="mw">
        <div class="mb-8 ">

            <div class="flex items-center gap-2 pb-2">
                <img :src="mentalWellbeing" alt="" srcset="" class="w-[20px] h-[20px] block">
                <h1 class=" text-[1rem] sm:text-[1.5rem] font-semibold">Mental wellbeing</h1>
            </div>
            <h1 class=" text-[1rem] sm:text-[1.15rem] py-1">Total Tracked: <span class="font-bold">140</span>
                students
            </h1>
        </div>


        <table class="table-auto w-full ">
            <thead>
                <tr>
                    <th class="px-4 py-2 bg-gray-200 text-left">Name</th>
                    <th class="px-4 py-2 bg-gray-200 text-left">Contact Number</th>
                    <th class="px-4 py-2 bg-gray-200 text-left">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-red-300">
                    <td class="border px-4 py-2">John Doe</td>
                    <td class="border px-4 py-2">123-456-7890</td>
                    <td class="border px-4 py-2">85</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Jane Smith</td>
                    <td class="border px-4 py-2">987-654-3210</td>
                    <td class="border px-4 py-2">92</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
                <tr class="">
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
            </tbody>
        </table>

    </section>
    <section class="max-w-screen-lg mx-auto py-4 my-8 shadow rounded-2xl p-4" id="fh">
        <div class="mb-8 ">

            <div class="flex items-center gap-2 pb-2">
                <img :src="foodHabit" alt="" srcset="" class="w-[20px] h-[20px] block">
                <h1 class=" text-[1rem] sm:text-[1.5rem] font-semibold">Food Habits</h1>
            </div>
            <h1 class=" text-[1rem] sm:text-[1.15rem] py-1">Total Tracked: <span class="font-bold">140</span>
                students
            </h1>
        </div>
        <table class="table-auto w-full ">
            <thead>
                <tr>
                    <th class="px-4 py-2 bg-gray-200 text-left">Name</th>
                    <th class="px-4 py-2 bg-gray-200 text-left">Contact Number</th>
                    <th class="px-4 py-2 bg-gray-200 text-left">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border px-4 py-2">John Doe</td>
                    <td class="border px-4 py-2">123-456-7890</td>
                    <td class="border px-4 py-2">85</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Jane Smith</td>
                    <td class="border px-4 py-2">987-654-3210</td>
                    <td class="border px-4 py-2">92</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
            </tbody>
        </table>

    </section>
    <section class="max-w-screen-lg mx-auto py-4 my-8 shadow rounded-2xl p-4" id="sl">
        <div class="mb-8 ">

            <div class="flex items-center gap-2 pb-2">
                <img :src="sleep" alt="" srcset="" class="w-[20px] h-[20px] block">
                <h1 class=" text-[1rem] sm:text-[1.5rem] font-semibold">Sleep</h1>
            </div>
            <h1 class=" text-[1rem] sm:text-[1.15rem] py-1">Total Tracked: <span class="font-bold">140</span>
                students
            </h1>
        </div>
        <table class="table-auto w-full ">
            <thead>
                <tr>
                    <th class="px-4 py-2 bg-gray-200 text-left">Name</th>
                    <th class="px-4 py-2 bg-gray-200 text-left">Contact Number</th>
                    <th class="px-4 py-2 bg-gray-200 text-left">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border px-4 py-2">John Doe</td>
                    <td class="border px-4 py-2">123-456-7890</td>
                    <td class="border px-4 py-2">85</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Jane Smith</td>
                    <td class="border px-4 py-2">987-654-3210</td>
                    <td class="border px-4 py-2">92</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Mike Johnson</td>
                    <td class="border px-4 py-2">456-789-0123</td>
                    <td class="border px-4 py-2">78</td>
                </tr>
            </tbody>
        </table>

    </section>

</template>

<style scoped>
.card {
    background-color: aliceblue;
}
</style>
<!-- bg-[#E2E8F0] -->