import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import './tailwind.css'
import mitt from 'mitt';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


const emitter = mitt();
const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.emitter = emitter;
app.component('VueDatePicker', VueDatePicker);
app.use(pinia).mount('#app');
