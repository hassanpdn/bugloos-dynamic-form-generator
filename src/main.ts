import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import mitt from 'mitt';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
