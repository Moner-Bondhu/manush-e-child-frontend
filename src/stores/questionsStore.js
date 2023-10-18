import {defineStore} from 'pinia'
import axios from "axios";

export const useQuestionsStore = defineStore('questions', {
    state: () => {
        return {
            "child_id": localStorage.getItem('child_id'),
            "form": null
        }
    }, 

    actions: {
        async fetchForm(id) {
          try {
            var response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/form/` + id
              );
            this.form = response.data.data;
          } catch (error) {
            // let the form component display the error
            console.log(error)
          }
        },
      },
})