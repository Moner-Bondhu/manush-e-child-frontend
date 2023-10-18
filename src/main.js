import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './output.css'
import './style.css'
import App from './App.vue'
import router from './router'
import FreeText from './components/FreeText.vue';
import MultipleChoice from './components/MultipleChoice.vue';
import Slider from './components/Slider.vue'
import BooleanChoice from './components/BooleanChoice.vue'

const pinia = createPinia()
const app = createApp(App)

app
    .component("FreeText", FreeText)
    .component("MultipleChoice", MultipleChoice)
    .component("Slider", Slider)
    .component("BooleanChoice", BooleanChoice)
app.use(pinia)
app.use(router)

app.mount('#app')