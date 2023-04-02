import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App)

// Element-Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

app.use(ElementPlus);


// 挂载
app.mount('#app')
