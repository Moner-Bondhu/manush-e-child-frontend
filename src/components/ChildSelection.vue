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
    axios.post(`http://mbunicef.localhost/api/child/create`, {
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
<div class="grid card sm:grid-cols-2 container mx-auto my-8 text-center gap-8 w-[90%]">
    <div class="">
                    <div class="rounded-lg hover:bg-gray-500 ease-in duration-100">
                            <div class="py-2">
                            <h2 class="text-2xl  rounded-t-lg py-2">Existing Child ID</h2>
                            <input type="number" v-model="child_id" name="child_id">
                            </div>

                            <button @click="existing()" class="text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-12 py-2.5 text-center mr-2 mb-2 my-2">Login</button>
                            
                    </div>
    </div>

    <div class="">
                    <div class="hover:bg-gray-500 rounded-lg ease-in duration-100">
                            <div class="py-2">
                                <h2 class="text-2xl  rounded-t-lg py-2">Create new Profile</h2>
                                <label for="child_name" class="block mb-2 text-sm font-medium text-gray-900">Name : </label>
                                <input required type="text" name="child_name" id="child_name" v-model="child_name">

                                <label for="child_age" class="block mb-2 text-sm font-medium text-gray-900">Age : </label>
                                <input required type="number" name="child_age" id="child_age" v-model="child_age">

                                <label for="child_gender" class="block mb-2 text-sm font-medium text-gray-900">Gender : </label>
                                <select name="child_gender" id="child_gender" v-model="child_gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>

                                <br>
                                <button @click="create()" class="text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-12 py-2.5 text-center mr-2 mb-2 my-2">Create Profile</button>
                            </div>
                            
                    </div>
    </div>
</div>    
  
</template>

<style scoped>

.card{
    background-color: aliceblue;
}

</style>
