<script>
import { useQuestionsStore } from "../stores/questionsStore";
import axios from "axios";

export default {
  data() {
    return {
      child_id: localStorage.getItem('child_id'),
      child_name: null,
      child_age: null,
      child_gender: null
    };
  },
  methods: {
    async existing() {
      const store = useQuestionsStore();
      store.child_id = this.child_id;
      localStorage.setItem('child_id', this.child_id);
      this.$router.push({ path: `/modules` });
    },

    async create() {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/child/create`, {
                        child_name: this.child_name,
                        child_age: this.child_age,
                        child_gender: this.child_gender,
                    }).then(result => {
                        this.child_id = result.data.data.child_id;
                        localStorage.setItem('child_id', this.child_id)
                        this.$router.push({ path: `/modules` });
                    }, error => {
                        console.error(error);
                    });  
    },
  },
};
</script>

<template>
  <section class="max-w-screen-lg mx-auto py-4 my-8 px-4">
    <div class="p-4 shadow rounded-2xl md:w-[66%] mx-auto">
      <h1 class=" text-[1rem] sm:text-[1.5rem] font-semibold mb-8">Login</h1>

      <div class="md:grid md:grid-cols-3 md:items-start md:justify-items-start mb-6">
        <div class="md:col-span-1">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-[1.15rem]" for="clientName">
            Existing Child ID
          </label>
        </div>
        <div class="md:w-full md:col-span-2">
          <input type="number" v-model="child_id" name="child_id"
            class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <button @click="existing()"
            class="text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-4 font-medium rounded-md	 text-sm px-12 py-2.5 text-center mr-2 mb-2 my-2 w-fill">Login</button>
        </div>
      </div>
    </div>

  </section>
  <section class="max-w-screen-lg mx-auto py-4 my-8 px-4">
    <div class="p-4 shadow rounded-2xl md:w-[66%] mx-auto">
      <h1 class=" text-[1rem] sm:text-[1.5rem] font-semibold mb-8">Create new Profile
      </h1>

      <div class="md:grid md:grid-cols-3 md:items-center md:justify-items-start mb-6">
        <div class="md:col-span-1">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="child_name">
            Name
          </label>
        </div>
        <div class="md:w-full md:col-span-2">
          <input required type="text" name="child_name" id="child_name" v-model="child_name"
            class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        </div>
      </div>

      <div class="md:grid md:grid-cols-3 md:items-center md:justify-items-start mb-6">
        <div class="md:col-span-1">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="child_age">
            Age
          </label>
        </div>
        <div class="md:w-full md:col-span-2">
          <input required type="number" name="child_age" id="child_age" v-model="child_age"
            class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        </div>
      </div>

      <div class="md:grid md:grid-cols-3 md:items-center md:justify-items-start mb-6">
        <div class="md:col-span-1">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="child_gender">
            Gender
          </label>
        </div>
        <div class="md:w-full md:col-span-2">
          <select
            class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="child_gender" id="child_gender" v-model="child_gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br>
        <button @click="create()"
          class="text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-4 font-medium rounded-md text-sm px-12 py-2.5 text-center mr-2 mb-2 my-2">Create
          Profile</button>
      </div>
    </div>

  </section>


</template>

<style scoped>

.card{
    background-color: aliceblue;
}

</style>
